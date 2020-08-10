import React, { useCallback, useState, useRef } from 'react';
import { FlatList, Image, Alert } from 'react-native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';
import { useVehicle } from '../../hooks/vehicle';

import { getValidationErrors } from '../../utils/getValidationErrors';

import { CustomModal } from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import carIcon from '../../assets/car-avatar.png';

import {
  Container,
  VehicleCard,
  VehicleAvatarContainer,
  VehicleContent,
  VehicleRemoveButton,
  VehicleName,
  VehicleLicensePlate,
} from './styles';

interface IAddVehicleData {
  vehicle_name: string;
  license_plate: string;
}

const Vehicles: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [addVehicleModalVisible, setAddVehicleModalVisible] = useState(false);

  const { token } = useAuth();
  const { vehicles, addVehicle, removeVehicle } = useVehicle();

  const handleToggleModal = useCallback(() => {
    setAddVehicleModalVisible(!addVehicleModalVisible);
  }, [addVehicleModalVisible]);

  const handleAddVehicle = useCallback(
    async (data: IAddVehicleData) => {
      try {
        const schema = Yup.object().shape({
          vehicle_name: Yup.string()
            .min(3, 'Mínimo de 3 caracteres')
            .max(15, 'No máximo 15 caracteres')
            .required('Campo obrigatório'),
          license_plate: Yup.string()
            .uppercase('Deve ser em caixa alta')
            .strict(true)
            .min(7, 'Mínimo de 7 caracteres')
            .required('Campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await addVehicle({
          user_token: token,
          vehicle: {
            name: data.vehicle_name,
            license_plate: data.license_plate,
          },
        });

        setAddVehicleModalVisible(!addVehicleModalVisible);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        Alert.alert(
          'Erro ao adicionar veículo',
          'Verifique os dados informados',
        );
      }
    },
    [addVehicle, token, addVehicleModalVisible],
  );

  const handleRemoveVehicle = useCallback(
    async (vehicle_id: string) => {
      await removeVehicle({
        user_token: token,
        vehicle_id,
      });
    },
    [removeVehicle, token],
  );

  return (
    <Container>
      <FlatList
        data={vehicles}
        keyExtractor={item => item.license_plate}
        style={{ width: '100%' }}
        renderItem={({ item: vehicle }) => (
          <VehicleCard>
            <VehicleAvatarContainer>
              <Image source={carIcon} />
            </VehicleAvatarContainer>

            <VehicleContent>
              <VehicleRemoveButton
                onPress={() => handleRemoveVehicle(vehicle.id)}
              >
                <Icon name="trash-2" size={20} color="#F55252" />
              </VehicleRemoveButton>

              <VehicleName>{vehicle.name}</VehicleName>
              <VehicleLicensePlate>{vehicle.license_plate}</VehicleLicensePlate>
            </VehicleContent>
          </VehicleCard>
        )}
      />

      <CustomModal
        isVisible={addVehicleModalVisible}
        cancelBehavior={handleToggleModal}
        confirmBehavior={() => formRef.current?.submitForm()}
        title="Adicionar veículo"
        description="Preencha o formulário abaixo com as seguintes informações:"
      >
        <Form ref={formRef} onSubmit={handleAddVehicle}>
          <Input
            name="vehicle_name"
            icon="edit-2"
            placeholder="Dê um nome ao veículo"
            autoCapitalize="words"
            autoCorrect={false}
            autoCompleteType="off"
            returnKeyType="next"
          />

          <Input
            name="license_plate"
            icon="truck"
            placeholder='Insira a placa sem "-"'
            autoCapitalize="characters"
            autoCorrect={false}
            autoCompleteType="off"
            returnKeyType="done"
          />
        </Form>
      </CustomModal>

      <Button onPress={handleToggleModal}>Adicionar veículo</Button>
    </Container>
  );
};

export { Vehicles };
