import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get('window');

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Onboarding: undefined;
  // Add other screens here as needed
};

const SplashScreen: React.FC = () => {
    type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;
    const navigation = useNavigation<SplashScreenNavigationProp>();
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const navigateToLogin = () => {
            navigation.navigate('Onboarding'); // Change to 'Login' if you want to navigate to the login screen
        };

        Animated.sequence([
            Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
            friction: 5,
            tension: 120,
            }),
            Animated.timing(opacityAnim, {
            toValue: 0,
            duration: 1200,
            useNativeDriver: true,
            delay: 2000,
            }),
        ]).start(() => {
            navigateToLogin();
        });
    }, [scaleAnim, opacityAnim, navigation]);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.logoContainer,
                    {
                        transform: [{ scale: scaleAnim }],
                        opacity: opacityAnim,
                    },
                ]}
            >
                <Image
                    source={require('../../assets/images/BesCare.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBF6F1', // Even lighter brown
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: width * 0.7,
        height: width * 0.7,
        borderRadius: (width * 0.7) / 2, // Make it circular
    },
});

export default SplashScreen;