import React from 'react';

import { AuthProvider } from './auth';
import { PaymentProvider } from './payment';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <PaymentProvider>{children}</PaymentProvider>
  </AuthProvider>
);

export { AppProvider };
