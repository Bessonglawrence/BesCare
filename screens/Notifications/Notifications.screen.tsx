import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, RefreshControl } from 'react-native';
import { StatusBar } from 'expo-status-bar';

type Notification = {
    id: string;
    title: string;
    message: string;
    date: string;
};

const mockNotifications: Notification[] = [
    {
        id: '1',
        title: 'Welcome!',
        message: 'Thank you for joining BesCare.',
        date: '2024-06-10',
    },
    {
        id: '2',
        title: 'Appointment Reminder',
        message: 'You have an appointment tomorrow at 10:00 AM.',
        date: '2024-06-09',
    },
];

const NotificationsScreen: React.FC = () => {
    const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        // Simulate fetching new notifications
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    };

    const renderItem = ({ item }: { item: Notification }) => (
        <View style={styles.notificationCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.date}>{item.date}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.header}>Notifications</Text>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No notifications yet.</Text>
                }
                contentContainerStyle={notifications.length === 0 && styles.emptyContainer}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 16,
    },
    notificationCard: {
        backgroundColor: '#f5f5f5',
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    message: {
        fontSize: 16,
        marginTop: 4,
    },
    date: {
        fontSize: 12,
        color: '#888',
        marginTop: 8,
        alignSelf: 'flex-end',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#aaa',
        marginTop: 32,
    },
});

export default NotificationsScreen;