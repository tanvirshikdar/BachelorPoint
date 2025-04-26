// src/navigation/AppNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import PropertiesScreen from '../screens/PropertiesScreen';
import RoommateMatchingScreen from '../screens/RoommateMatchingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Properties') iconName = 'business';
          else if (route.name === 'Roommate Matching') iconName = 'people';
          else if (route.name === 'Login') iconName = 'log-in';
          else if (route.name === 'Register') iconName = 'person-add';
          else if (route.name === 'About Us') iconName = 'information-circle';
          else if (route.name === 'Contact Us') iconName = 'call';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Properties" component={PropertiesScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Roommate Matching" component={RoommateMatchingScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Tab.Screen name="About Us" component={AboutUsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Contact Us" component={ContactUsScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainTabs} options={{ headerShown: false, title: 'BachelorPoint' }} />
      {/* TODO: Add more Drawer screens for Properties, Roommate Matching, Login, Register, etc. */}
    </Drawer.Navigator>
  );
}