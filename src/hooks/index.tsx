import React from 'react';

import { AuthProvider } from './auth';
import { PaymentProvider } from './payment';
import { VehicleProvider } from './vehicle';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <PaymentProvider>
      <VehicleProvider>{children}</VehicleProvider>
    </PaymentProvider>
  </AuthProvider>
);

export { AppProvider };
