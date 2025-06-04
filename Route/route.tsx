import React from 'react';
import { Stack } from 'expo-router';
import Home from '../screens/Home/Home.screen';
import Notifications from '../screens/Notifications/Notifications.screen';
import Profile from '../screens/Profile/Profile.screen';

const Route: React.FC = () => {
    return (
        <Stack>
            <Stack.Screen name="Home" options={{ title: 'Home' }} component={Home} />
            <Stack.Screen name="Notifications" options={{ title: 'Notifications' }} component={Notifications} />
            <Stack.Screen name="Profile" options={{ title: 'Profile' }} component={Profile} />
        </Stack>
    );
};

export default Route;
