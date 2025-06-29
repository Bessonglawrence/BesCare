import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './Login.styles';


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
                <Text style={styles.title}>Login To View And Manage Your Care Calls</Text>
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

                <View style={{width:"100%", alignItems:'center', top: 100}}>
                    <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Password reset instructions will be sent to your email.')}>
                        <Text style={{ color: '#007BFF', marginBottom: 16, alignSelf: 'flex-end' }}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

        </View>
    );
};


export default LoginScreen;