import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ProfileScreen = () => {
    // Example user data
    const user = {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        avatar: 'https://i.pravatar.cc/150?img=3',
        bio: 'React Native Developer. Coffee enthusiast. Cat lover.',
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.bio}>{user.bio}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 40,
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#eee',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    email: {
        fontSize: 16,
        color: '#888',
        marginBottom: 12,
    },
    bio: {
        fontSize: 16,
        color: '#444',
        textAlign: 'center',
        marginBottom: 24,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ProfileScreen;