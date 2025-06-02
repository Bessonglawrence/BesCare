import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import NavBar from '@/components/NavBar/NavBar.component';
import { Animated, Dimensions } from 'react-native';
import React, { useRef, useEffect,useState  } from 'react';

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

export default function AppointmentDetails({navigation}: {navigation: any}) {
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
        address = '', // Provide a default value if address is missing
    } = route.params;

    const [activeTab, setActiveTab] = useState(0);

    // Move these declarations to the component scope
    const TAB_COUNT = 2;
    const SCREEN_WIDTH = Dimensions.get('window').width;
    const translateX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // No animation needed
    }, [activeTab, SCREEN_WIDTH, translateX]);

    const [modalVisible, setModalVisible] = useState(false);
    const [notesInput, setNotesInput] = useState('');
    return (
        <View style={{ flex: 1 }}>
            <NavBar 
                title="Appointment Details"
                leftIcon="arrow-back"
                onLeftPress={() => navigation.goBack()}
                style={{ backgroundColor: '#fff', elevation: 5, shadowOpacity: 0 }}
                rightIcon="Home"
                onRightPress={() => navigation.navigate('Home')}
            />
            {/* Tab Bar */}
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#eee', backgroundColor: '#fafafa' }}>
                {['Client information', 'Care information'].map((tab, idx) => (
                    <TouchableOpacity
                        key={tab}
                        style={{
                            flex: 1,
                            paddingVertical: 14,
                            borderBottomWidth: activeTab === idx ? 3 : 0,
                            borderColor: activeTab === idx ? '#1976d2' : 'transparent',
                        }}
                        onPress={() => setActiveTab(idx)}
                    >
                        <Text style={{ textAlign: 'center', color: activeTab === idx ? '#1976d2' : '#888', fontWeight: activeTab === idx ? 'bold' : 'normal' }}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            {/* Tab Content */}
            <ScrollView style={styles.detailsContainer}>
                {activeTab === 0 ? (
                    // Client information tab
                    <>
                        <View style={styles.header}>
                            <Image source={{ uri: caregiverPic }} style={styles.caregiverPic} />
                            <View style={styles.headerText}>
                                <Text style={styles.userName}>{userName}</Text>
                                <Text style={styles.date}>{date}</Text>
                            </View>
                        </View>
                        <Text style={styles.label}>Service User Name:</Text>
                        <Text style={styles.value}>{serviceUserName}</Text>
                        <Text style={styles.label}>Service User Age:</Text>
                        <Text style={styles.value}>{serviceUserAge}</Text>
                        <Text style={styles.label}>Service User Contact:</Text>
                        <Text style={styles.value}>{serviceUserContact}</Text>
                        <Text style={styles.label}>Next of Kin:</Text>
                        <Text style={styles.value}>{nextOfKin}</Text>
                        <Text style={[styles.label]}>Address:</Text>
                        <Text style={styles.value}>{address}</Text>
                    </>
                ) : (
                    // Care information tab
                    <>
                        <Text style={styles.label}>Time:</Text>
                        <Text style={styles.value}>{date}</Text>
                        <Text style={styles.value}>{startTime} - {endTime}</Text>
                        <Text style={styles.label}>Attended:</Text>
                        <Text style={styles.value}>{attended ? 'Yes' : 'No'}</Text>
                        <Text style={styles.label}>Previous Care Notes:</Text>
                        <Text style={styles.value}>{careNotes}</Text>
                        <Text style={styles.label}>Carer Name:</Text>
                        <Text style={styles.value}>{carerName}</Text>
                        <Text style={styles.label}>Care List:</Text>
                        {careList.map((item, idx) => (
                            <Text key={idx} style={styles.value}>• {item}</Text>
                        ))}
                    </>
                )}
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: '#fff', borderTopWidth: 1, borderColor: '#eee' }}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: '#1976d2',
                        paddingVertical: 14,
                        borderRadius: 8,
                        marginRight: 10,
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        // Handle first button press
                        console.log('Start Call Pressed');
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Start Call</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        paddingVertical: 14,
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: '#1976d2',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        // Handle second button press
                        setModalVisible(true);
                    }}
                >
                    <Text style={{ color: '#1976d2', fontWeight: 'bold', fontSize: 16 }}>Add Notes</Text>
                    {/* Modal for adding notes */}
                    <Modal
                        visible={modalVisible}
                        animationType="slide"
                        transparent={true}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                            <View style={{ width: '85%', backgroundColor: '#fff', borderRadius: 10, padding: 20 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Add Notes</Text>
                                <TextInput
                                    style={{
                                        borderWidth: 1,
                                        borderColor: '#ccc',
                                        borderRadius: 8,
                                        minHeight: 80,
                                        padding: 10,
                                        textAlignVertical: 'top',
                                        marginBottom: 20,
                                    }}
                                    multiline
                                    numberOfLines={4}
                                    placeholder="Enter your notes here..."
                                    value={notesInput}
                                    onChangeText={setNotesInput}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <TouchableOpacity
                                        style={{ marginRight: 15 }}
                                        onPress={() => setModalVisible(false)}
                                    >
                                        <Text style={{ color: '#1976d2', fontWeight: 'bold' }}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            // Handle save notes logic here
                                            setModalVisible(false);
                                        }}
                                    >
                                        <Text style={{ color: '#1976d2', fontWeight: 'bold' }}>Save</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </TouchableOpacity>
            </View>
        </View>
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
    address: {
        fontSize: 16,
        color: '#333',
        marginTop: 2,
    },
});