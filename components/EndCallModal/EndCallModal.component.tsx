import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import styles from './EndCallModal.style';

interface EndCallModalProps {
    visible: boolean;
    onClose: () => void;
    onEndButtonPressed: () => void;
    careList?: string[];
}

const EndCallModal: React.FC<EndCallModalProps> = ({ visible, onClose, onEndButtonPressed, careList }) => {
    const [checkedStates, setCheckedStates] = useState<boolean[]>([]);

    React.useEffect(() => {
        if (careList && careList.length > 0) {
            setCheckedStates(Array(careList.length).fill(false));
        } else {
            setCheckedStates([]);
        }
    }, [careList, visible]);

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}  
        >
                <TouchableOpacity
                    style={styles.xButton}
                    activeOpacity={1}
                    onPress={onClose}
                >
                    <Text style={styles.xText}>X</Text>
                </TouchableOpacity>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Before Ending This Call</Text>

                    <Text style={{marginVertical: 15, fontSize: 15, fontWeight:"600",}}>Have Completed the following?</Text>
                    
                        {careList && careList.map((item, idx) => (
                            <View style={styles.checkboxRow} key={idx}>
                                <CheckBox
                                    value={checkedStates[idx] || false}
                                    onValueChange={() => {
                                        const updated = [...checkedStates];
                                        updated[idx] = !updated[idx];
                                        setCheckedStates(updated);
                                    }}
                                    style={{height: 30, width: 30, marginRight: 10,}}
                                />
                                <Text style={{paddingVertical: 6, fontSize: 17,}}>{`${item}`}</Text>
                            </View>

                        ))}
                    <TouchableOpacity
                        style={[
                            styles.closeButton,
                            { opacity: checkedStates.every(Boolean) && checkedStates.length > 0 ? 1 : 0.5 }
                        ]}
                        onPress={onEndButtonPressed}
                        disabled={!checkedStates.every(Boolean) || checkedStates.length === 0}
                    >
                        <Text style={styles.closeButtonText}>End</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default EndCallModal;