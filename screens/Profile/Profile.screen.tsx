import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './Profile.style';

const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '074 2342 5872',
    line_manager: 'Kelly Topley',
    oncall_procedure: 'Make sure to phone the office number 0115 891 5786 and the person oncall will give you directivess on any related querries.',
    Address: '28 Mcmuffin Street, Lineharmshir, RQ23 7DU',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
};

const ProfileScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <Ionicons name="person-circle-outline" size={80} color="#4F8EF7" />
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.infoLabel}>Phone:</Text>
            <Text style={styles.infoValue}>{user.phone}</Text>
            <Text style={styles.infoLabel}>Line Manager:</Text>
            <Text style={styles.infoValue}>{user.line_manager}</Text>
            <Text style={styles.infoLabel}>Oncall Procedure:</Text>
            <Text style={styles.infoValue}>{user.oncall_procedure}</Text>
            <Text style={styles.infoLabel}>Address:</Text>
            <Text style={styles.infoValue}>{user.Address}</Text>
            </View>
            <View style={styles.header}>
                <Ionicons name="person-circle-outline" size={80} color="#4F8EF7" />
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="settings-outline" size={24} color="#4F8EF7" />
                    <Text style={styles.buttonText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="log-out-outline" size={24} color="#4F8EF7" />
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};


export default ProfileScreen;