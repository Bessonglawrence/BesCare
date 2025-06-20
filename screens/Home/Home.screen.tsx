import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import { appointments } from '@/components/Data/Data';
import AppointmentCard from '@/components/AppointmentCard/AppointmentCard.component';
import NavBar from '@/components/NavBar/NavBar.component';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import styles from './Home.style';


// Function to check if an appointment is in the future
export const isFutureAppointment = (date: string, startTime: string) => {
    // Combine date and time into ISO string and parse
    const appointmentDate = new Date(`${date}T${startTime}:00`);
    return appointmentDate > new Date();
};


// Helper to get unique dates from appointments
const getDates = () => {
    const dates = Array.from(new Set(appointments.map(a => a.date)));
    return dates.sort();
};

const DateBar = ({
    dates,
    selectedDate,
    onSelectDate,
}: {
    dates: string[];
    selectedDate: string;
    onSelectDate: (date: string) => void;
}) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateBar}>
        {dates.map(date => (
            <TouchableOpacity
                key={date}
                style={[
                    styles.dateButton,
                    selectedDate === date && styles.selectedDateButton,
                ]}
                onPress={() => onSelectDate(date)}
            >
                <Text style={[
                    styles.dateButtonText,
                    selectedDate === date && styles.selectedDateButtonText,
                ]}>
                    {date}
                </Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
);

export default function HomePage({navigation}: {navigation: any}) {
    const dates = getDates();
    const [selectedDate, setSelectedDate] = useState(dates[0]);

    const filteredAppointments = appointments.filter(a => a.date === selectedDate);


    useEffect(() => {
        const onBackPress = () => {
            // Show confirmation alert before exiting
            if (navigation.isFocused && typeof navigation.isFocused === 'function' && !navigation.isFocused()) {
                return false;
            }
    
            Alert.alert(
                'Exit App',
                'Are you sure you want to exit?',
                [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'Exit', style: 'destructive', onPress: () => BackHandler.exitApp() },
                ],
                { cancelable: true }
            );
            return true;
        };
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []);

    return (
        <View style={styles.container}>
             <NavBar 
                title='Home'
                style={{ elevation: 0, backgroundColor: '#fff' }} // Custom styles for NavBar
                rightIcon
                iconName='notifications-outline' // Icon for notifications
                onRightPress={() => navigation.navigate('Notifications')} // Navigate to Notifications screen
            />
            <DateBar
            dates={dates}
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            />
            <FlatList
            data={filteredAppointments}
            keyExtractor={item => item.id}
            contentContainerStyle={{ padding: 16 }}
            renderItem={({ item }) => (
                <AppointmentCard
                    userName={item.userName}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    caregiverPic={item.caregiverPic}
                    attended={item.attended}
                    date={item.date}
                    onPress={() => navigation.navigate('AppointmentDetails', { ...item })} // Passes appointment data
                />
            )}
            ListEmptyComponent={
                <Text style={styles.emptyText}>No appointments for this date.</Text>
            }
            />
        </View>
    );
}
