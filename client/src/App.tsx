/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from '@screens/HomeScreen';
import { ThemeProvider } from '@styles/ThemeContext';


function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  )
}

export default App;
