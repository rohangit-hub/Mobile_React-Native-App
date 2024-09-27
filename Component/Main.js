import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


import Home from './Home';
import Video from './Video';
import BMI from './BMI';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default Main = () =>{
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { backgroundColor: "#E7EAF6" } }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: () => {
            return (
              <FontAwesome name="home" size={30} color="rgb(52, 53, 54)" />
            )
          }
        }} />


        <Tab.Screen name="Video" component={Video} options={{
          tabBarIcon: () => {
            return (
              <MaterialIcons name="ondemand-video" size={30} color="rgb(52, 53, 54)" />
            )
          }
        }} />

        <Tab.Screen name="BMI" component={BMI} options={{
          tabBarIcon: () => {
            return (
              <FontAwesome5 name="calculator" size={30} color="rgb(52, 53, 54)" />
            )
          }
        }} />

        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: () => {
            return (
              <FontAwesome name="user" size={30} color="rgb(52, 53, 54)" />
            )
          }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}