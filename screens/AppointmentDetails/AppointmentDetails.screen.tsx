import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput, } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import NavBar from '@/components/NavBar/NavBar.component';
import { Animated, Dimensions } from 'react-native';
import React, { useRef, useEffect,useState  } from 'react';
import Checkbox from 'expo-checkbox';
import * as Linking from 'expo-linking';
import { Ionicons } from '@expo/vector-icons';

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
    medications?: string[]; // Add this line to fix the error
    carePlan?: string;         // Optionally add this if you use carePlan as well
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
        medications = [], // Provide a default value if medication is missing
        carePlan = '', // Provide a default value if carePlan is missing
    } = route.params;

    const [activeTab, setActiveTab] = useState(0);

    // Move these declarations to the component scope
    const TAB_COUNT = 2;
    const SCREEN_WIDTH = Dimensions.get('window').width;
    const translateX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.spring(translateX, {
            toValue: activeTab * SCREEN_WIDTH,
            useNativeDriver: true,
        }).start();
    }, [activeTab, SCREEN_WIDTH, translateX]);

    const [modalVisible, setModalVisible] = useState(false);
    const [notesInput, setNotesInput] = useState('');
    const [alertSupervisor, setAlertSupervisor] = useState(false);
    

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
                        <View
                            style={{
                                backgroundColor: '#f5f5f5',
                                marginVertical: 25,
                                padding: 10,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.15,
                                shadowRadius: 4,
                                elevation: 4,
                            }}
                        >
                             <View style={[styles.header, { marginBottom: 16, borderBottomWidth: 2, borderColor: '#eee', paddingBottom: 5 }]}>
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
                        </View>     
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

                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.card}
                        >
                            <View style={styles.cardHeader}>
                                <Ionicons name="medkit" size={24} color="#1976d2" />
                                <Text style={styles.label}>MEDICATIONS:</Text>
                            </View>
                            {medications.length > 0 ? (
                                medications.map((med, idx) => (
                                    <Text key={idx} style={[styles.value, { marginVertical: 6 }]}>• {med}</Text>
                                ))
                            ) : (
                                <Text style={styles.value}>None</Text>
                            )}
                            <TouchableOpacity
                                style={styles.outComeButton}
                                activeOpacity={0.7}
                                onPress={() => {
                                    // Implement medication recording logic here
                                    console.log('Record Medication');
                                }}
                            >
                                <Text style={styles.outComeButtonText}>Record OutCome</Text>
                            </TouchableOpacity>

                        </TouchableOpacity>

                        <View style={styles.card}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 2, borderColor: '#eee' }}>
                                <Ionicons name="file-tray" size={24} color="#1976d2" />
                                <Text style={styles.label}>CARE PLAN AND OTHER DOCUMENTS:</Text>
                            </View>

                            {carePlan ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        // Implement download logic here
                                        // For example, open the carePlan URL in the browser
                                        if (carePlan) {
                                            Linking.openURL(carePlan).catch(err => {
                                                console.warn('Failed to open URL:', err);
                                            });
                                        }
                                        // For now, just log or show a message
                                        console.log('Download Care Plan:', carePlan);
                                    }}
                                    style={{ flexDirection: 'row', alignItems: 'center' }}
                                >
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <Text style={[styles.value, { color: '#1976d2', fontWeight: 'bold', fontSize: 16}]}>
                                        Download Care Plan
                                    </Text>
                                    <Ionicons name="download" size={30} color="#1976d2" style={{ alignSelf: 'flex-end', marginTop: 5 }} />
                                    </TouchableOpacity>
                                    
                                </TouchableOpacity>
                            ) : (
                                <Text style={styles.value}>None</Text>
                            )}
                            
                        </View>

                         <View style={styles.card} >
                            <View style={styles.cardHeader}>
                                <Ionicons name="medkit" size={24} color="#1976d2" />
                                <Text style={styles.label}>CARE LIST:</Text>
                            </View>
                            <View style={{ flexWrap: 'wrap' }}>
                            {careList.map((item, idx) => (
                                <Text key={idx} style={[styles.value,]}>• {item}</Text>
                            ))}
                            </View>
                        </View>
                        
                    </>
                )}
            </ScrollView>
            <View style={styles.buttonsView}>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => {
                        // Handle first button press
                        console.log('Start Call Pressed');
                    }}
                >
                    <Text style={styles.buttonText}>Start Call</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => {
                        // Handle second button press
                        setModalVisible(true);
                    }}
                >
                    <Text style={[styles.buttonText,{color: '#1976d2'}]}>Add Notes</Text>
                    {/* Modal for adding notes */}
                    <Modal
                        visible={modalVisible}
                        animationType="slide"
                        transparent={true}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                            <TouchableOpacity
                                style={{ position: 'absolute', top: 60, alignSelf: 'center', zIndex: 1, padding: 10, backgroundColor: 'brown', borderRadius: 50, paddingHorizontal: 15, paddingVertical: 5 }}
                                activeOpacity={0.7}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>X</Text>
                            </TouchableOpacity>
                
                            {/* Modal content */}
                            <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 10, padding: 20 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 10, alignSelf: 'center' }}>Add Notes</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                                    <Checkbox
                                        value={alertSupervisor}
                                        onValueChange={setAlertSupervisor}
                                        color={alertSupervisor ? '#1976d2' : undefined}
                                        disabled={false}
                                    />
                                    <Text style={{ marginLeft: 8, fontSize: 16 }}>Alert Supervisor</Text>
                                </View>

                                <TextInput
                                    style={styles.textInput}
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
        marginBottom: 10, 
        fontSize: 16, 
        marginLeft: 8 
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
    card: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginVertical: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        elevation: 4,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1976d2',
    },
    outComeButton: {
        backgroundColor: '#1976d2',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    outComeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    medicationText: {
        fontSize: 16,
        color: '#333',
        marginTop: 2,
    },
    medicationList: {
        marginTop: 10,
        paddingLeft: 20,
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 2,
        borderColor: '#eee',
    },
   buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#eee',
    },
    button1: {
        flex: 1,
        backgroundColor: '#1976d2',
        paddingVertical: 14,
        borderRadius: 8,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    button2:{
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 14,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#1976d2',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        elevation: 4,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    checkbox: {
        marginRight: 10,
        borderColor: '#1976d2',
        borderWidth: 1,
        backgroundColor: '#fff',
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#1976d2',
        borderColor: '#1976d2',
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        minHeight: 80,
        padding: 10,
        textAlignVertical: 'top',
        marginBottom: 20,
    }
});