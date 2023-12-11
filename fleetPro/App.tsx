import React, {useEffect} from 'react';

import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, StatusBar} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/components/WelcomeScreen';
import Dashboard from './src/screens/Dashboard';
import SplashScreen from 'react-native-splash-screen';
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <GluestackUIProvider config={config}>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{animation: 'slide_from_bottom'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
