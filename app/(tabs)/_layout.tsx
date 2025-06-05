import React from 'react';
import {Tabs} from 'expo-router';
import {TabBar} from '@/components/Tabbar/Tabbar.component';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '@/screens/Login/Login.screen';
import ProfileScreen from './profile';
import SplashScreen from '@/screens/Splash/Splash.screen';
import OnboardingScreen from '@/screens/Onboarding/Onboarding.screen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function RootLayout() {
  // This is the main layout for the app, which includes the stack navigator
  // and the bottom tab navigator.
     return (
    <Stack.Navigator>
    <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={OnboardingScreen} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );

}

export default RootLayout;

function HomeTabs(){
  return (
    <Tabs tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen name="index" options={{ headerShown: false}} />
      <Tabs.Screen name="notifications" options={{ title: 'Notifications' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
