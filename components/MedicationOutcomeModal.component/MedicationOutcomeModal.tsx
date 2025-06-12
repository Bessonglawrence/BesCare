import Checkbox from 'expo-checkbox';
import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

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
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>

                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeText}>×</Text>
                </TouchableOpacity>

                <View style={styles.modalContainer}>
                    {title && <Text style={styles.title}>{title}</Text>}
                    
                    {medications && medications.length > 0 ? (
                        medications.map((med, idx) => (
                            <View style={{flexDirection: 'row'}} key={idx}>
                                <Checkbox />
                                <Text key={idx} style={[styles.value, { marginBottom: 10, paddingBottom: 6, marginLeft: 10 }]}>{med}</Text>
                                <TouchableOpacity style={{ marginLeft: 'auto', backgroundColor: '#1976d2', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6, marginVertical: 6}} onPress={() => { /* handle record action */ }}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Record</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.value}>None</Text>
                    )}
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
        width: '85%',
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
        position: 'absolute',
        right: 150,
        top: 40,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        backgroundColor: 'brown'
    },
    closeText: {
        fontSize: 24,
        color: 'ghostwhite',
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
    content: {
        marginTop: 12,
    },
});

export default MedicationOutcomeModal;