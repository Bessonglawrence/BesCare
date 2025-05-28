import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

// Mock data
const appointments = [
    {
        id: '1',
        date: '2025-05-28',
        userName: 'John Doe',
        startTime: '09:00',
        endTime: '10:00',
        caregiverPic: 'https://randomuser.me/api/portraits/men/1.jpg',
        attended: true,
    },
    {
        id: '2',
        date: '2025-05-28',
        userName: 'Jane Smith',
        startTime: '15:00',
        endTime: '16:00',
        caregiverPic: 'https://randomuser.me/api/portraits/men/2.jpg',
        attended: false,
    },
    {
        id: '3',
        date: '2025-06-10',
        userName: 'Jane Smith',
        startTime: '11:00',
        endTime: '12:00',
        caregiverPic: 'https://randomuser.me/api/portraits/women/2.jpg',
        attended: true,
    },
    {
        id: '4',
        date: '2025-06-10',
        userName: 'Alice Johnson',
        startTime: '14:00',
        endTime: '15:00',
        caregiverPic: 'https://randomuser.me/api/portraits/women/3.jpg',
        attended: true,
    },
    {
        id: '5',
        date: '2025-06-10',
        userName: 'Bob Brown',
        startTime: '10:30',
        endTime: '11:30',
        caregiverPic: 'https://randomuser.me/api/portraits/women/4.jpg',
        attended: false,
    },
    {
        id: '6',
        date: '2025-06-10',
        userName: 'Charlie Green',
        startTime: '13:00',
        endTime: '14:00',
        caregiverPic: 'https://randomuser.me/api/portraits/women/5.jpg',
        attended: true,
    },
    {
        id: '7',
        date: '2025-06-10',
        userName: 'Diana Prince',
        startTime: '08:00',
        endTime: '09:00',
        caregiverPic: 'https://randomuser.me/api/portraits/women/6.jpg',
        attended: false,
    },
    {
        id: '8',
        date: '2025-06-10',
        userName: 'Ethan Hunt',
        startTime: '10:00',
        endTime: '11:00',
        caregiverPic: 'https://randomuser.me/api/portraits/women/7.jpg',
        attended: true,
    },
    {
        id: '9',
        date: '2025-06-10',
        userName: 'Fiona Apple',
        startTime: '12:00',
        endTime: '13:00',
        caregiverPic: 'https://randomuser.me/api/portraits/women/8.jpg',
        attended: false,
    },
    {
        id: '10',
        date: '2024-06-11',
        userName: 'George Clooney',
        startTime: '15:00',
        endTime: '16:00',
        caregiverPic: 'https://randomuser.me/api/portraits/women/9.jpg',
        attended: true,
    },
    {
        id: '11',
        date: '2024-06-11',
        userName: 'Hannah Montana',
        startTime: '09:30',
        endTime: '10:30',
        caregiverPic: 'https://randomuser.me/api/portraits/women/10.jpg',
        attended: true,
    },
    {
        id: '12',
        date: '2024-06-12',
        userName: 'Ian Malcolm',
        startTime: '11:30',
        endTime: '12:30',
        caregiverPic: 'https://randomuser.me/api/portraits/women/11.jpg',
        attended: true,
    },
    {
        id: '13',
        date: '2024-06-12',
        userName: 'Julia Roberts',
        startTime: '14:30',
        endTime: '15:30',
        caregiverPic: 'https://randomuser.me/api/portraits/women/12.jpg',
        attended: false,
    },
    {
        id: '14',
        date: '2024-06-12',
        userName: 'Kevin Spacey',
        startTime: '16:00',
        endTime: '17:00',
        caregiverPic: 'https://randomuser.me/api/portraits/men/13.jpg',
        attended: true,
    },
    {
        id: '15',
        date: '2024-06-17',
        userName: 'Laura Croft',
        startTime: '08:30',
        endTime: '09:30',
        caregiverPic: 'https://randomuser.me/api/portraits/men/14.jpg',
        attended: false,
    },
    {
        id: '16',
        date: '2024-06-17',
        userName: 'Mike Tyson',
        startTime: '10:30',
        endTime: '11:30',
        caregiverPic: 'https://randomuser.me/api/portraits/men/15.jpg',
        attended: true,
    },
    {
        id: '17',
        date: '2024-06-17',
        userName: 'Nina Simone',
        startTime: '12:30',
        endTime: '13:30',
        caregiverPic: 'https://randomuser.me/api/portraits/men/16.jpg',
        attended: false,
    },
    {
        id: '18',
        date: '2024-06-17',
        userName: 'Oscar Wilde',
        startTime: '14:00',
        endTime: '15:00',
        caregiverPic: 'https://randomuser.me/api/portraits/men/17.jpg',
        attended: true,
    },
    {
        id: '19',
        date: '2024-06-17',
        userName: 'Paula Abdul',
        startTime: '15:30',
        endTime: '16:30',
        caregiverPic: 'https://randomuser.me/api/portraits/women/18.jpg',
        attended: false,
    },
    {
        id: '20',
        date: '2024-06-18',
        userName: 'Quentin Tarantino',
        startTime: '09:00',
        endTime: '10:00',
        caregiverPic: 'https://randomuser.me/api/portraits/men/19.jpg',
        attended: true,
    },
];

// Function to check if an appointment is in the future
export const isFutureAppointment = (date: string, startTime: string) => {
    // Combine date and time into ISO string and parse
    const appointmentDate = new Date(`${date}T${startTime}:00`);
    return appointmentDate > new Date();
};

// --- AppointmentCard modification below ---
const AppointmentCard = ({
    userName,
    startTime,
    endTime,
    caregiverPic,
    attended,
    date,
}: {
    userName: string;
    startTime: string;
    endTime: string;
    caregiverPic: string;
    attended: boolean;
    date: string;
}) => {
    const now = new Date();
    const appointmentStart = new Date(`${date}T${startTime}:00`);
    const appointmentEnd = new Date(`${date}T${endTime}:00`);

    let backgroundColor = '#1e88e5'; // default blue for attended
    if (now < appointmentStart) {
        backgroundColor = '#bdbdbd'; // grey for future
    } else if (now > appointmentEnd && !attended) {
        backgroundColor = '#e53935'; // red for missed
    } else if (attended) {
        backgroundColor = '#1e88e5'; // blue for attended
    }

    return (
        <View style={[
            styles.appointmentCard,
            { backgroundColor },
        ]}>
            <Image source={{ uri: caregiverPic }} style={styles.caregiverPic} />
            <View style={{ flex: 1, marginLeft: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.userName}>{userName}</Text>
                    <Text style={styles.timeText}>
                        {startTime} - {endTime}
                    </Text>
                    {now < appointmentStart && (
                        <Text style={{ color: '#ffd600', fontWeight: 'bold', fontSize: 14 }}>
                            Upcoming
                        </Text>
                    )}
                </View>
                {!attended && now > appointmentEnd && (
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
                        Not attended
                    </Text>
                )}
            </View>
        </View>
    );
};

// --- AppointmentCard modification below ---


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

export default function AppointmentsPage() {
    const dates = getDates();
    const [selectedDate, setSelectedDate] = useState(dates[0]);

    const filteredAppointments = appointments.filter(a => a.date === selectedDate);

    return (
        <View style={styles.container}>
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
                    />
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No appointments for this date.</Text>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    dateBar: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#f5f5f5',
    },
    dateButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#e0e0e0',
        marginRight: 8,
    },
    selectedDateButton: {
        backgroundColor: '#1976d2',
    },
    dateButtonText: {
        color: '#333',
        fontWeight: '500',
    },
    selectedDateButtonText: {
        color: '#fff',
    },
    appointmentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
    },
    caregiverPic: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#ccc',
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    timeText: {
        fontSize: 14,
        color: '#fff',
        marginTop: 4,
    },
    emptyText: {
        textAlign: 'center',
        color: '#888',
        marginTop: 32,
        fontSize: 16,
    },
});