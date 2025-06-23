import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ProfileScreen = () => {
    // Example user data
    const user = {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        phone: '074 2342 5872',
        line_manager: 'Kelly Topley',
        oncall_procedure: 'Make sure to phone the office number 0115 891 5786 and the person oncall will give you directivess on any related querries.',
        Address: '28 Mcmuffin Street, Lineharmshir, RQ23 7DU',
        avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <View style={{ alignItems: 'center', marginVertical: 10 }}>
                <Text style={{fontSize: 24, fontWeight: 'bold', fontStyle: 'italic', fontFamily: 'RockSalt'}}>{user.name}</Text>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.section}>
                <Text style={styles.sectionLabel}>Email</Text>
                <Text style={styles.sectionValue}>{user.email}</Text>
                </View>
                <View style={styles.section}>
                <Text style={styles.sectionLabel}>Phone</Text>
                <Text style={styles.sectionValue}>{user.phone}</Text>
                </View>
                <View style={styles.section}>
                <Text style={styles.sectionLabel}>Line Manager</Text>
                <Text style={styles.sectionValue}>{user.line_manager}</Text>
                </View>
                <View style={styles.section}>
                <Text style={styles.sectionLabel}>Oncall Procedure</Text>
                <Text style={styles.sectionValue}>{user.oncall_procedure}</Text>
                </View>
                <View style={styles.section}>
                <Text style={styles.sectionLabel}>Address</Text>
                <Text style={styles.sectionValue}>{user.Address}</Text>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginVertical: 20,
        borderWidth: 2,
        borderColor: '#eee',
        alignSelf: 'center',
    },
    section: {
        width: '90%',
        marginBottom: 16,
        padding: 12,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        alignSelf: 'center',
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
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        alignSelf: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    sectionLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    sectionValue: {
        fontSize: 16,
        color: '#444',
    },
});

export default ProfileScreen;