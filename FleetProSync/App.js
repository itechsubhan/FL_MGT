import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './src/navigators/Tabnavigator';
import Home from './src/screens/Home';
import CartScreen from './src/screens/CartScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//  <Stack.Navigator screenOptions={{headerShown: false}}>
      //   <Stack.Screen
      //   name="Tab"
      //   component={TabNavigator}
      //   options={{animation: 'slide_from_bottom'}}></Stack.Screen>
      //   <Stack.Screen
      //   name="Details"
      //   component={DetailsScreen}
      //   options={{animation: 'slide_from_bottom'}}></Stack.Screen>
      //   <Stack.Screen
      //   name="Payment"
      //   component={PaymentScreen}
      //   options={{animation: 'slide_from_bottom'}}></Stack.Screen>
      // </Stack.Navigator>