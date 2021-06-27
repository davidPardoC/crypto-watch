import React from 'react';
import {Home} from './src/view/home/home';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatisticsScreen} from './src/view/statistics/statistics';
/* Creating Stack Navigator */
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CryptoWatch"
          component={Home}
          options={{
            headerStyle: {backgroundColor: '#14121E'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
