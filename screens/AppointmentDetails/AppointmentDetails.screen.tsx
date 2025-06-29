import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput, } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import NavBar from '@/components/NavBar/NavBar.component';
import React, { useRef, useEffect,useState  } from 'react';
import * as Linking from 'expo-linking';
import { Ionicons } from '@expo/vector-icons';
import styles from './AppointmentDetails.styles';
import { AddNoteModal } from '@/components/AddNoteModal/AddNoteModal.component';
import StartCallModal from '@/components/StartCallModal/StartCallModal.component';
import MedicationOutcomeModal from '@/components/MedicationOutcomeModal.component/MedicationOutcomeModal';
import EndCallModal from '@/components/EndCallModal/EndCallModal.component';

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

    const [notesModal, setNotesModal] = useState(false);
    const [startCallModal, setStartCallModal] = useState(false);
    const [medModal, setMedModal] = useState(false);
    const [callStarted, setCallStarted] = useState(false);
    const [endCallModal, setEndCallModal] =useState(false);

    const onEndButtonPress = () =>{
        setCallStarted(false)
        setStartCallModal(false)
    }

    const onStartCallPress = () =>{
        setStartCallModal(true)
        setEndCallModal(false)
    }
    
    const iconSize = 26;

    // Parse the date string and compare with today
    const today = new Date();
    const callDate = new Date(date);
    // Compare only the date part (ignore time)
    const isToday =
        today.getFullYear() === callDate.getFullYear() &&
        today.getMonth() === callDate.getMonth() &&
        today.getDate() === callDate.getDate();

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
                        <View style={[styles.card]} >
                            <View style={styles.cardHeader}>
                                <Ionicons name="time" size={iconSize} color="#1976d2" />
                                <Text style={styles.label}>CALL DATE AND TIME:</Text>
                            </View>
                            <Text style={[styles.value,{paddingVertical: 2}]}>{date}</Text>
                            <Text style={[styles.value,{paddingVertical: 2}]}>{startTime} - {endTime}</Text>
                        </View>

                         <View style={[styles.card]} >
                            <View style={styles.cardHeader}>
                                <Ionicons name="book" size={iconSize} color="#1976d2" />
                                <Text style={styles.label}>PREVIOUS NOTES:</Text>
                            </View>
                            <Text style={[styles.value,{padding: 10, lineHeight: 24}]}>{careNotes}</Text>
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.card}
                            disabled={!isToday}
                            >
                            <View style={styles.cardHeader}>
                                <Ionicons name="medkit" size={iconSize} color="#1976d2" />
                                <Text style={styles.label}>MEDICATIONS:</Text>
                            </View>
                            {medications.length > 0 ? (
                                medications.map((med, idx) => (
                                    <Text key={idx} style={[styles.value, { marginVertical: 6 }]}>• {med}</Text>
                                ))
                            ) : (
                                <Text style={styles.value}>None</Text>
                            )}
                            {(() => {
                                // Parse the date string and compare with today
                                const today = new Date();
                                const callDate = new Date(date);
                                // Compare only the date part (ignore time)
                                const isToday =
                                    today.getFullYear() === callDate.getFullYear() &&
                                    today.getMonth() === callDate.getMonth() &&
                                    today.getDate() === callDate.getDate();

                                return (
                                    <TouchableOpacity
                                        style={[
                                            styles.outComeButton,
                                            !isToday && { opacity: 0.5 }

                                        ]}
                                        activeOpacity={0.7}
                                        onPress={() => {
                                            if (isToday) {
                                                setMedModal(true)
                                            }
                                        }}
                                        disabled={!isToday}
                                    >
                                        <MedicationOutcomeModal medications={medications} onClose={() => setMedModal(false)} visible={medModal} title="Record Mediction Outcome"/>
                                        <Text style={styles.outComeButtonText}>Record OutCome</Text>
                                    </TouchableOpacity>
                                );
                            })()}
                        </TouchableOpacity>

                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Ionicons name="file-tray" size={iconSize} color="#1976d2" />
                                <Text style={styles.label}>CARE PLAN AND DOCUMENTS:</Text>
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

                         <View style={[styles.card,{marginBottom: 38}]} >
                            <View style={styles.cardHeader}>
                                <Ionicons name="list" size={iconSize} color="#1976d2" />
                                <Text style={styles.label}>CARE LIST:</Text>
                            </View>
                            <View style={{ flexWrap: 'wrap' }}>
                            {careList.map((item, idx) => (
                                <Text key={idx} style={[styles.value,{paddingVertical: 6}]}>• {item}</Text>
                            ))}
                            </View>
                        </View>
                        
                    </>
                )}
            </ScrollView>
            <View style={styles.buttonsView}>
                {/* Disable buttons if date is not today */}
                {(() => {
                    // Parse the date string and compare with today
                    const today = new Date();
                    const callDate = new Date(date);
                    // Compare only the date part (ignore time)
                    const isToday =
                        today.getFullYear() === callDate.getFullYear() &&
                        today.getMonth() === callDate.getMonth() &&
                        today.getDate() === callDate.getDate();

                    return (
                        <>
                            {/* Toggle between  Start Call and EndCall buttons */}
                            <View style={{flex: 1}}>
                                { !callStarted ?
                                <TouchableOpacity
                                    style={[
                                        styles.button1,
                                        !isToday && { opacity: 0.5 }
                                    ]}
                                    onPress={() => {
                                        if (isToday && !callStarted) {
                                            onStartCallPress()                                  
                                        }
                                    }}
                                    disabled={!isToday}
                                    >
                                    <Text style={[styles.buttonText]}>Start Call</Text>
                                    <StartCallModal visible={startCallModal} onClose={() => setStartCallModal(false)} onStartButtonPressed={() =>{ setCallStarted(true);}}/>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    style={[
                                        styles.endCallButton,
                                        !isToday && { opacity: 0.5 }
                                    ]}
                                    onPress={() => {
                                        if (isToday) {
                                            setEndCallModal(true)
                                        }
                                    }}
                                    disabled={!isToday}
                                    >
                                    <Text style={[styles.buttonText,{color: 'brown'}]}>End Call</Text>
                                    <EndCallModal visible={endCallModal} onClose={() => setEndCallModal(false)} onEndButtonPressed={onEndButtonPress} careList={careList} />
                                </TouchableOpacity>
                                }
                            </View>


                            <TouchableOpacity
                                style={[
                                    styles.button2,
                                    !isToday && { opacity: 0.5 }
                                ]}
                                onPress={() => {
                                    if (isToday) {
                                        setNotesModal(true);
                                    }
                                }}
                                disabled={!isToday}
                            >
                                <Text style={[styles.buttonText, { color: '#1976d2' }]}>Add Notes</Text>
                                {/* Modal for adding notes */}
                                <AddNoteModal visible={notesModal} onClose={() => setNotesModal(false)} />
                            
                            </TouchableOpacity>
                        </>
                    );
                })()}
            </View>
        </View>
    );
};