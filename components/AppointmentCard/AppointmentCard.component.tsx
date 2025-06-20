import React from 'react'; 
import { View, Text, Image, StyleSheet } from 'react-native';
import { appointments } from '@/components/Data/Data';  
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './AppointmentCard.style';

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
            <View style={styles.subView}>
                <View>
                    <Text style={styles.userName}>{userName}</Text>
                    <Text style={styles.timeText}>
                        {startTime} - {endTime}
                    </Text>
                    {now < appointmentStart && (
                        <Text style={styles.upcoming}>
                            Upcoming
                        </Text>
                    )}
                </View>
                {!attended && now > appointmentEnd && (
                    <Text style={styles.notAttended}>
                        Not attended
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default AppointmentCard
