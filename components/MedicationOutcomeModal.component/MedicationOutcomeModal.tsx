import Checkbox from 'expo-checkbox';
import React,{useEffect,useState} from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './MedicationOutcomeModal.style';


interface MedicationOutcomeModalProps {
    visible: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    title?: string;
    medications?: []
}

const MedicationOutcomeModal: React.FC<MedicationOutcomeModalProps> = ({
    visible,
    onClose,
    title,
    medications,
}) => {
    const [checkedStates, setCheckedStates] = useState<boolean[]>(
        medications && medications.length > 0 ? new Array(medications.length).fill(false) : []
    );

    useEffect(() => {
        setCheckedStates(medications && medications.length > 0 ? new Array(medications.length).fill(false) : []);
    }, [medications]);

    const handleCheckboxChange = (idx: number) => {
        setCheckedStates(prev =>
            prev.map((checked, i) => (i === idx ? !checked : checked))
        );
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeText}>X</Text>
                    </TouchableOpacity>
                    {title && <Text style={styles.title}>{title}</Text>}
                    <View style={styles.content}>
                        {medications && medications.length > 0 ? (
                            medications.map((med, idx) => (
                                <ScrollView key={idx}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}} key={idx}>
                                    <Checkbox
                                        value={checkedStates[idx]}
                                        onValueChange={() => handleCheckboxChange(idx)}
                                        style={{width: 30, height: 30}}
                                    />
                                    <Text style={[styles.value, { marginBottom: 3, marginLeft: 10, fontWeight: 'bold' }]}>{med}</Text>
                                    <TouchableOpacity
                                        style={[styles.recordButton,{backgroundColor: checkedStates && checkedStates[idx] ? '#1976d2' : '#b0b0b0',}]}
                                        disabled={!checkedStates || !checkedStates[idx]}
                                        onPress={() => { /* handle record action */ }}
                                    >
                                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Administered</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.pickerMain}>
                                    <Text style={styles.outCome}>Outcome:</Text>
                                    <View style={styles.pickerView} key={idx} >
                                        <Picker
                                            selectedValue={checkedStates[idx] ? undefined : 'Not Required'}
                                            enabled={checkedStates[idx]}
                                            style={{ height: 60, width: "auto", paddingBottom: 25 }}
                                            onValueChange={(itemValue: string | number, itemIndex: number) => {
                                                //Todo handle outcome selection here
                                            }}
                                            key={idx}
                                        >
                                            <Picker.Item label="Not Required" value="Not Required" />
                                            <Picker.Item label="Administered" value="Administered" />
                                            <Picker.Item label="Left with Service User" value="Left with Service User" />
                                            <Picker.Item label="Out Of Medication" value="Out Of Medication" />
                                            <Picker.Item label="Service User Refused" value="Service User Refused" />
                                            <Picker.Item label="Service User Reminded" value="Service User Reminded" />
                                            <Picker.Item label="Administered By Double Up" value="Administered By Double Up" />
                                        </Picker>
                                    </View>
                                </View>
                                </ScrollView>
                            ))
                        ) : (
                            <Text style={styles.value}>None</Text>
                        )}
                    </View>
                </View>
            </View>
        </Modal>
    );
};


export default MedicationOutcomeModal;