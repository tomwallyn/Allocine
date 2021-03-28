import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import StreamingScreen from '../screens/StreamingScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import DetailsScreen from '../screens/Details';
import { BottomTabParamList, TabOneParamList, StreamingParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: '#fece12', 
      inactiveTintColor: '#888888', 
      style: {
        backgroundColor: '#2e2e2e'
      } }}>
      <BottomTab.Screen
        name="Film"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="film" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Serie"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="tv-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Streaming"
        component={StreamingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="logo-youtube" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Streamingg"
        component={DetailsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="logo-youtube" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Cinéma', 
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: '800',
          fontSize: 30,
          marginRight: 240
        },}}
      />
    </TabOneStack.Navigator>
  );
}

const StreamingStack = createStackNavigator<StreamingParamList>();

function StreamingNavigator() {
  return (
    <StreamingStack.Navigator>
      <StreamingStack.Screen
        name="StreamingScreen"
        component={StreamingScreen}
        options={{ headerTitle: 'Cinéma', 
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: '800',
          fontSize: 30,
          marginRight: 240
        },}}
      />
    </StreamingStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoStackScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Cinéma', 
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: '800',
          fontSize: 30,
          marginRight: 240
          
        },}}
      />
    </TabTwoStack.Navigator>
  );
}

const DetailsStack = createStackNavigator<DetailsParamList>();

function DetailsNavigator() {
  return (
    <DetailsStack.Navigator>
      <DetailsStack.Screen
        name="DetailsStackScreen"
        component={DetailsScreen}
        options={{ headerTitle: 'Cinéma', 
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: '800',
          fontSize: 30,
          marginRight: 240
          
        },}}
      />
    </DetailsStack.Navigator>
  );
}