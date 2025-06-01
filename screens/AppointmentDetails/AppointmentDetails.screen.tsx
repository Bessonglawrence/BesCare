import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import NavBar from '@/components/NavBar/NavBar.component';

type AppointmentDetailsProps = {
    date: string;
    userName: string;
    startTime: string;
    endTime: string;
    caregiverPic: string;
    attended: boolean;
    careNotes: string;
    serviceUserName: string;
    carerName: string;
    serviceUserAge: number;
    serviceUserContact: string;
    nextOfKin: string;
    careList: string[];
    address: string;
};

type RootStackParamList = {
    Home: undefined;
    AppointmentDetails: AppointmentDetailsProps;
};

export default function AppointmentDetails({navigation}: {navigation: any}) {
    const route = useRoute<RouteProp<RootStackParamList, 'AppointmentDetails'>>();
    const {
        date,
        userName,
        startTime,
        endTime,
        caregiverPic,
        attended,
        careNotes,
        serviceUserName,
        carerName,
        serviceUserAge,
        serviceUserContact,
        nextOfKin,
        careList,
        address = '', // Provide a default value if address is missing
    } = route.params;

    return (
        <View>
            <NavBar 
                title="Appointment Details"
                leftIcon="arrow-back"
                onLeftPress={() => navigation.goBack()}
                style={{ backgroundColor: '#fff', elevation: 5, shadowOpacity: 0 }}
                rightIcon="Home"
                onRightPress={() => navigation.navigate('Home')}
            />
            <View style={styles.header}>
                <Image source={{ uri: caregiverPic }} style={styles.caregiverPic} />
                <View style={styles.headerText}>
                    <Text style={styles.userName}>{userName}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
        <ScrollView contentContainerStyle={styles.detailsContainer}>
            <Text style={styles.label}>Time:</Text>
            <Text style={styles.value}>{startTime} - {endTime}</Text>
            <Text style={styles.label}>Attended:</Text>
            <Text style={styles.value}>{attended ? 'Yes' : 'No'}</Text>
            <Text style={styles.label}> Previous Care Notes:</Text>
            <Text style={styles.value}>{careNotes}</Text>
            <Text style={styles.label}>Service User Name:</Text>
            <Text style={styles.value}>{serviceUserName}</Text>
            <Text style={styles.label}>Carer Name:</Text>
            <Text style={styles.value}>{carerName}</Text>
            <Text style={styles.label}>Service User Age:</Text>
            <Text style={styles.value}>{serviceUserAge}</Text>
            <Text style={styles.label}>Service User Contact:</Text>
            <Text style={styles.value}>{serviceUserContact}</Text>
            <Text style={styles.label}>Next of Kin:</Text>
            <Text style={styles.value}>{nextOfKin}</Text>
            <Text style={styles.label}>Care List:</Text>
            {careList.map((item, idx) => (
                <Text key={idx} style={styles.value}>• {item}</Text>
            ))}
            <Text style={[styles.label,{paddingBottom: 150}]}>Address:</Text>
            <Text style={[styles.value,{color:"red"}]}>{address}</Text>
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    caregiverPic: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#ccc',
        marginRight: 16,
    },
    headerText: {
        flex: 1,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
    },
    date: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    label: {
        fontWeight: '600',
        marginTop: 12,
        color: '#1976d2',
    },
    value: {
        fontSize: 16,
        color: '#333',
        marginTop: 2,
    },
    address: {
        fontSize: 16,
        color: '#333',
        marginTop: 2,
        marginBottom: 16,
    },
});