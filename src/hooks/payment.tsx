import React, { createContext, useContext, useState, useCallback } from 'react';

interface IPaymentState {
  id: string;
  value: string;
  selected: boolean;
  iconName?: string | undefined;
}

interface IPaymentContext {
  payment: IPaymentState[];
  setPaymentMethod(payment_id: string): void;
}

const PaymentContext = createContext<IPaymentContext>({} as IPaymentContext);

const PaymentProvider: React.FC = ({ children }) => {
  const [payment, setPayment] = useState<IPaymentState[]>([
    {
      id: '23454',
      value: 'Débito ou crédito',
      selected: true,
      iconName: 'credit-card',
    },
    {
      id: '56423',
      value: 'Dinheiro',
      selected: false,
      iconName: 'dollar-sign',
    },
  ]);

  const setPaymentMethod = useCallback((payment_id: string) => {
    setPayment(oldState => {
      const allPayments = oldState.map(eachPayment => {
        return {
          id: eachPayment.id,
          value: eachPayment.value,
          selected: false,
          iconName: eachPayment.iconName,
        };
      });

      const findPayment = allPayments.find(
        eachPayment => eachPayment.id === payment_id,
      );

      if (findPayment) {
        findPayment.selected = true;
      }

      return allPayments;
    });
  }, []);

  return (
    <PaymentContext.Provider value={{ payment, setPaymentMethod }}>
      {children}
    </PaymentContext.Provider>
  );
};

function usePayment(): IPaymentContext {
  const context = useContext(PaymentContext);

  if (!context) {
    throw new Error('usePayment hook must be used within a payment provider');
  }

  return context;
}

export { PaymentProvider, usePayment };
