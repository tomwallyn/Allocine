import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import Details from "../screens/Details";
import StreamingScreen from "../screens/StreamingScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(28, 28, 30)',
    background: 'rgb(242, 242, 242)',
    card: '#fbd022',
    text: 'rgb(28, 28, 30)',
    border: 'transparent',
    notification: 'rgb(28, 28, 30)',
  },
};

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="TabTwoScreen" component={TabTwoScreen} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="StreamingScreen" component={StreamingScreen} />
      <Stack.Screen name="TabOneScreen" component={TabOneScreen} />
    </Stack.Navigator>
  );
}
