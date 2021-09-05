import React from 'react';
import {Home} from './src/view/home/home';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatisticsScreen} from './src/view/statistics/statistics';
/* Creating Stack Navigator */
const Stack = createStackNavigator();
const App = () => {
  const HEADER_OPTIONS = {
    headerStyle: {backgroundColor: '#14121E'},
    headerTintColor: '#fff',
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CryptoWatch"
          component={Home}
          options={HEADER_OPTIONS}
        />
        <Stack.Screen
          name="Statistics"
          component={StatisticsScreen}
          options={HEADER_OPTIONS}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
