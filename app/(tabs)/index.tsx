import HomePage from '@/screens/Home/Home.screen';
import AppointmentDetails from '@/screens/AppointmentDetails/AppointmentDetails.screen';

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import NotificationsScreen from './notifications';
import LoginScreen from '@/screens/Login/Login.screen';

const Stack = createStackNavigator();

const indexPage = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
                <Stack.Screen name="Notifications" component={NotificationsScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </View>
    );
}
export default indexPage;

