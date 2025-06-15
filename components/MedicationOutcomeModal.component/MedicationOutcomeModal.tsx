import Checkbox from 'expo-checkbox';
import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';


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
    const [checkedStates, setCheckedStates] = React.useState<boolean[]>(
        medications && medications.length > 0 ? new Array(medications.length).fill(false) : []
    );

    React.useEffect(() => {
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
                                <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}} key={idx}>
                                    <Checkbox
                                        value={checkedStates[idx]}
                                        onValueChange={() => handleCheckboxChange(idx)}
                                        style={{width: 30, height: 30}}
                                    />
                                    <Text style={[styles.value, { marginBottom: 3, marginLeft: 10 }]}>{med}</Text>
                                    <TouchableOpacity
                                        style={[styles.recordButton,{backgroundColor: checkedStates && checkedStates[idx] ? '#1976d2' : '#b0b0b0',}]}
                                        disabled={!checkedStates || !checkedStates[idx]}
                                        onPress={() => { /* handle record action */ }}
                                    >
                                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Administered</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: 40, marginTop: 6, marginBottom: 12 }}>
                                    <Text style={{ fontSize: 14, marginBottom: 4 }}>Outcome:</Text>
                                    <View style={{
                                        borderWidth: 1,
                                        borderColor: '#ccc',
                                        borderRadius: 6,
                                        overflow: 'hidden',
                                        backgroundColor: '#fafafa',
                                    }}>
                                        <Picker
                                            selectedValue={checkedStates[idx] ? undefined : 'Not Required'}
                                            enabled={checkedStates[idx]}
                                            style={{ height: 60, width: "auto", paddingBottom: 25 }}
                                            onValueChange={(itemValue: string | number, itemIndex: number) => {
                                                // handle outcome selection here
                                            }}
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
                                </View>
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

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '95%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        elevation: 5,
        position: 'relative',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
        textAlign: 'center',
    },
    closeButton: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: 'ghostwhite',
        borderColor: 'brown',
        borderWidth: 1,
        alignSelf: 'center',
        marginBottom: 40
    },
    closeText: {
        fontSize: 35,
        color: 'brown',
        fontWeight: 'bold'
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
    content: {
        marginTop: 24,
    },
    recordButton:{
        marginLeft: 'auto',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        marginVertical: 6
    }
});

export default MedicationOutcomeModal;