import React from 'react'; 
import { View, Text, Image, StyleSheet } from 'react-native';
import { appointments } from '@/components/Data/Data';  
import { TouchableOpacity } from 'react-native-gesture-handler';

// --- AppointmentCard modification below ---
const AppointmentCard = ({
    userName,
    startTime,
    endTime,
    caregiverPic,
    attended,
    date,
    onPress, 
}: {
    userName: string;
    startTime: string;
    endTime: string;
    caregiverPic: string;
    attended: boolean;
    date: string; 
    onPress?: () => void;
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
        <TouchableOpacity style={[
            styles.appointmentCard,
            { backgroundColor },
        ]} onPress={onPress}>
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
        </TouchableOpacity>
    );
};

export default AppointmentCard

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