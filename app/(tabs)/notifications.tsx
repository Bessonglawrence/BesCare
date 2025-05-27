import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const notifications = [
    { id: '1', title: 'Welcome!', message: 'Thanks for joining BesCare.' },
    { id: '2', title: 'Appointment Reminder', message: 'You have an appointment tomorrow at 10:00 AM.' },
    { id: '3', title: 'Update Available', message: 'A new version of the app is available.' },
];

const NotificationItem = ({ title, message }: { title: string; message: string }) => (
    <View style={styles.notificationItem}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
    </View>
);

export default function NotificationsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Notifications</Text>
            <FlatList
                data={notifications}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <NotificationItem title={item.title} message={item.message} />
                )}
                ListEmptyComponent={<Text style={styles.empty}>No notifications</Text>}
                contentContainerStyle={notifications.length === 0 && styles.emptyContainer}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 16,
    },
    notificationItem: {
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    message: {
        fontSize: 14,
        color: '#555',
    },
    empty: {
        textAlign: 'center',
        marginTop: 32,
        color: '#888',
        fontSize: 16,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});