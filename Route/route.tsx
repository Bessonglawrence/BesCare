import React from 'react';
import { Stack } from 'expo-router';
import Home from '../screens/Home/Home.screen';
import Notifications from '../screens/Notifications/Notifications.screen';
import Profile from '../screens/Profile/Profile.screen';

const Route: React.FC = () => {
    return (
        <Stack>
            <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
            <Stack.Screen name="Notifications" component={Notifications} options={{ title: 'Notifications' }} />
            <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
        </Stack>
    );
};

export default Route;
