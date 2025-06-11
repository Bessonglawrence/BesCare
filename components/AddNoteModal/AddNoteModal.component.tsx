import React,{useState, useEffect} from 'react';
import {
    Modal,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Animated,
    Easing,
    Dimensions,
    Platform,
    Text,
    TextInput,
} from 'react-native';
import Checkbox from 'expo-checkbox';

interface AddNoteModalProps {
visible: boolean;
onClose: () => void;
children?: React.ReactNode;
}

const SCREEN_HEIGHT = Dimensions.get('window').height;

export const AddNoteModal: React.FC<AddNoteModalProps> = ({
    visible,
    onClose,
    children,
}) => {
const slideAnim = React.useRef(new Animated.Value(SCREEN_HEIGHT)).current;

useEffect(() => {
    if (visible) {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 3000,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start();
    } else {
        Animated.timing(slideAnim, {
            toValue: SCREEN_HEIGHT,
            duration: 2000,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true,
        }).start();
    }
}, [visible, slideAnim]);


    const [notesInput, setNotesInput] = useState<string>('');
    const [alertSupervisor, setAlertSupervisor] = useState<boolean>(false);

return (
   <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}
        >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
            <TouchableOpacity
                style={{ position: 'absolute', top: 60, alignSelf: 'center', zIndex: 1, padding: 10, backgroundColor: 'brown', borderRadius: 50, paddingHorizontal: 15, paddingVertical: 5 }}
                activeOpacity={1}
                onPress={onClose}
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
                        onPress={onClose}
                    >
                        <Text style={{ color: '#1976d2', fontWeight: 'bold' }}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onClose}
                    >
                        <Text style={{ color: '#1976d2', fontWeight: 'bold' }}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
);
};

const styles = StyleSheet.create({
backdrop: {
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.4,
},
modalContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    minHeight: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
},
textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    minHeight: 80,
    marginBottom: 16,
    textAlignVertical: 'top',
},
});
// Remove this function. 
// Instead, import useEffect from React at the top of your file:
