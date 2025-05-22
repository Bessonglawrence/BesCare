import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
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
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="settings-outline" size={24} color="#4F8EF7" />
                    <Text style={styles.buttonText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="log-out-outline" size={24} color="#4F8EF7" />
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 24,
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        marginTop: -40,
        borderWidth: 3,
        borderColor: '#fff',
        backgroundColor: '#eee',
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 16,
    },
    email: {
        fontSize: 16,
        color: '#888',
        marginTop: 4,
    },
    body: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F6FA',
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
    },
    buttonText: {
        marginLeft: 12,
        fontSize: 18,
        color: '#4F8EF7',
        fontWeight: '500',
    },
});

export default ProfileScreen;