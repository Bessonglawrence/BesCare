import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, BackHandler, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    // add other routes here if needed
};

const LoginScreen = ({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList, 'Home'> }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        // Handle login logic here
        Alert.alert('Success', `Logged in as ${email}`);
        navigation.navigate('Home'); // Navigate to Home screen after login
    };


    return (
        <View style={styles.container}>
            
                <Image
                    source={require('../../assets/images/BesCare.png')} // Replace with your logo path
                    style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 24 }}
                />                  
                <Text style={styles.title}>Login To View Your Care Calls</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity
                        style={styles.toggleButton}
                        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                        <Text style={styles.toggleButtonText}>
                            {isPasswordVisible ? (
                                <Ionicons name="eye-off" size={24} />
                            ) : (
                                <Ionicons name="eye" size={24} />
                            )}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Password reset instructions will be sent to your email.')}>
                    <Text style={{ color: '#007BFF', marginBottom: 16, alignSelf: 'flex-end' }}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fcf8f3',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 24,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 0.5,
        borderColor: 'lightgray',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: 'ghostwhite',
    },
    passwordContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: 'ghostwhite',
    },
    passwordInput: {
        flex: 1,
        height: 50,
        paddingHorizontal: 16,
    },
    toggleButton: {
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    toggleButtonText: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#007BFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;

function useEffect(arg0: () => () => any, arg1: never[]) {
    throw new Error('Function not implemented.');
}
