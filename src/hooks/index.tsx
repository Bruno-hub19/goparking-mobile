import React from 'react';

import { AuthProvider } from './auth';
import { VehicleProvider } from './vehicle';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <VehicleProvider>{children}</VehicleProvider>
  </AuthProvider>
);

export { AppProvider };
