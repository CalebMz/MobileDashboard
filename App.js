import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PricingChart from './MetaGraphs/PricingChart';
import UsersChart from './MetaGraphs/UsersChart';

import { navigationRef } from './RootNavigation';
import HomeScreen from './Screens/HomeScreen';
import Netflix from './Screens/Netflix';
import HBOMax from './Screens/HBOMax';
import Amazon from './Screens/Amazon';
import Disney from './Screens/Disney';
const Stack = createStackNavigator();

/**The main app function had been kept as clean and as neat as possible by making full use
 * of reacts StackNavigator.
 * This means that the only time we would need to change anything is if we wish to add another screen.
 */


export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Netflix"
          component={Netflix}
        />
        <Stack.Screen
          name="HBO Max"
          component={HBOMax}
        />
        <Stack.Screen
          name="Amazon"
          component={Amazon}
        />
        <Stack.Screen
          name="Disney+"
          component={Disney}
        />
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
  BarChart:{
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    bottom: 25,
    left: 15
  },
  PieChart:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 100,
  },
  UserTitle:{
    flex: 1,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    bottom: 10,
    left: 140
  },
  PricingTitle:{
    flex: 1,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    bottom: 310,
    left: 140
  },
  Button:{
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 60,
  }
});
