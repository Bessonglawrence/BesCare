// import React, { useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
// import { appointments } from '@/components/Data/Data';
// import AppointmentCard from '@/components/AppointmentCard/AppointmentCard.component';


// // Function to check if an appointment is in the future
// export const isFutureAppointment = (date: string, startTime: string) => {
//     // Combine date and time into ISO string and parse
//     const appointmentDate = new Date(`${date}T${startTime}:00`);
//     return appointmentDate > new Date();
// };

// // Helper to get unique dates from appointments
// const getDates = () => {
//     const dates = Array.from(new Set(appointments.map(a => a.date)));
//     return dates.sort();
// };

// const DateBar = ({
//     dates,
//     selectedDate,
//     onSelectDate,
// }: {
//     dates: string[];
//     selectedDate: string;
//     onSelectDate: (date: string) => void;
// }) => (
//     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateBar}>
//         {dates.map(date => (
//             <TouchableOpacity
//                 key={date}
//                 style={[
//                     styles.dateButton,
//                     selectedDate === date && styles.selectedDateButton,
//                 ]}
//                 onPress={() => onSelectDate(date)}
//             >
//                 <Text style={[
//                     styles.dateButtonText,
//                     selectedDate === date && styles.selectedDateButtonText,
//                 ]}>
//                     {date}
//                 </Text>
//             </TouchableOpacity>
//         ))}
//     </ScrollView>
// );

// export default function AppointmentsPage() {
//     const dates = getDates();
//     const [selectedDate, setSelectedDate] = useState(dates[0]);

//     const filteredAppointments = appointments.filter(a => a.date === selectedDate);

//     return (
//         <View style={styles.container}>
//             <DateBar
//                 dates={dates}
//                 selectedDate={selectedDate}
//                 onSelectDate={setSelectedDate}
//             />
//             <FlatList
//                 data={filteredAppointments}
//                 keyExtractor={item => item.id}
//                 contentContainerStyle={{ padding: 16 }}
//                 renderItem={({ item }) => (
//                     <AppointmentCard
//                         userName={item.userName}
//                         startTime={item.startTime}
//                         endTime={item.endTime}
//                         caregiverPic={item.caregiverPic}
//                         attended={item.attended}
//                         date={item.date}
//                     />
//                 )}
//                 ListEmptyComponent={
//                     <Text style={styles.emptyText}>No appointments for this date.</Text>
//                 }
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: '#fff' },
//     dateBar: {
//         flexDirection: 'row',
//         paddingVertical: 12,
//         paddingHorizontal: 8,
//         backgroundColor: '#f5f5f5',
//     },
//     dateButton: {
//         paddingVertical: 8,
//         paddingHorizontal: 16,
//         borderRadius: 20,
//         backgroundColor: '#e0e0e0',
//         marginRight: 8,
//     },
//     selectedDateButton: {
//         backgroundColor: '#1976d2',
//     },
//     dateButtonText: {
//         color: '#333',
//         fontWeight: '500',
//     },
//     selectedDateButtonText: {
//         color: '#fff',
//     },
//     appointmentCard: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderRadius: 12,
//         padding: 16,
//         marginBottom: 16,
//         elevation: 2,
//     },
//     caregiverPic: {
//         width: 48,
//         height: 48,
//         borderRadius: 24,
//         backgroundColor: '#ccc',
//     },
//     userName: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#fff',
//     },
//     timeText: {
//         fontSize: 14,
//         color: '#fff',
//         marginTop: 4,
//     },
//     emptyText: {
//         textAlign: 'center',
//         color: '#888',
//         marginTop: 32,
//         fontSize: 16,
//     },
// });

import HomePage from '@/screens/Home/Home.screen';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';

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

export const AppointmentDetails: React.FC = () => {
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
        address,
    } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.detailsContainer}>
            <View style={styles.header}>
                <Image source={{ uri: caregiverPic }} style={styles.caregiverPic} />
                <View style={styles.headerText}>
                    <Text style={styles.userName}>{userName}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
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
            {/* {careList.map((item, idx) => (
                <Text key={idx} style={styles.value}>• {item}</Text>
            ))} */}
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{address}</Text>
        </ScrollView>
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
});
const Stack = createStackNavigator();

const indexPage = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
            </Stack.Navigator>
        </View>
    );
}
export default indexPage;

