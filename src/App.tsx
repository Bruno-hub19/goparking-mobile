import React from 'react';
import { StatusBar } from 'react-native';

import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <StatusBar backgroundColor="#1F1F1F" barStyle="light-content" />
    <SignIn />
  </>
);

export default App;
