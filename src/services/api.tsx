import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const token = AsyncStorage.getItem('@GoParking:token').then(
  response => response,
);

const api = axios.create({
  baseURL: 'http://localhost:3434',
  headers: token ? { authorization: token } : null,
});

export { api };
