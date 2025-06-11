import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';

interface StartCallModalProps {
    visible: boolean;
    onClose: () => void;
}

const StartCallModal: React.FC<StartCallModalProps> = ({ visible, onClose }) => {
    const [readCareNotes, setReadCareNotes] = useState(false);
    const [readCarePlan, setReadCarePlan] = useState(false);

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
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
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
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
    container: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 24,
        alignItems: 'stretch',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    label: {
        marginLeft: 8,
        fontSize: 16,
        flexShrink: 1,
    },
    closeButton: {
        marginTop: 24,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});

export default StartCallModal;