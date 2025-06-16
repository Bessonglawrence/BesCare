import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import styles from './StartCallModal.style';

interface StartCallModalProps {
    visible: boolean;
    onClose: () => void;
    onStartButtonPressed: () => void;
}

const StartCallModal: React.FC<StartCallModalProps> = ({ visible, onClose, onStartButtonPressed }) => {
    const [readCareNotes, setReadCareNotes] = useState(false);
    const [readCarePlan, setReadCarePlan] = useState(false);

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}  
        >
                <TouchableOpacity
                    style={{ position: 'absolute', top: 60, alignSelf: 'center', zIndex: 1, padding: 10, backgroundColor: 'brown', borderRadius: 50, paddingHorizontal: 15, paddingVertical: 5 }}
                    activeOpacity={1}
                    onPress={onClose}
                >
                    <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>X</Text>
                </TouchableOpacity>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Before Starting the Call</Text>
                    <View style={styles.checkboxRow}>
                        <CheckBox
                            value={readCareNotes}
                            onValueChange={setReadCareNotes}
                        />
                        <Text style={styles.label}>Have you read previous care notes?</Text>
                    </View>
                    <View style={styles.checkboxRow}>
                        <CheckBox
                            value={readCarePlan}
                            onValueChange={setReadCarePlan}
                        />
                        <Text style={styles.label}>Have you read care plan?</Text>
                    </View>
                    <TouchableOpacity
                        style={[
                            styles.closeButton,
                            !(readCareNotes && readCarePlan) && { backgroundColor: '#b0b0b0' }
                        ]}
                        onPress={onStartButtonPressed}
                        disabled={!(readCareNotes && readCarePlan)}
                    >
                        <Text style={styles.closeButtonText}>Start</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default StartCallModal;