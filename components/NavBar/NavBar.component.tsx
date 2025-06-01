import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this package installed
import { MaterialIcons } from '@expo/vector-icons'; // Ensure you have this package installed
interface NavBarProps {
    title: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onLeftPress?: () => void;
    onRightPress?: () => void;
    style?: ViewStyle;
    iconName?: string; // Icon name for the right icon, if using Ionicons
}

const NavBar: React.FC<NavBarProps> = ({
    title,
    leftIcon,
    rightIcon,
    onLeftPress,
    onRightPress,
    style,
    iconName
}) => {
    const translateY = useRef(new Animated.Value(-100)).current;

    useEffect(() => {
        Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
            friction: 7,
            tension: 60,
        }).start();
    }, [translateY]);

    return (
        <Animated.View style={[styles.container, style, { transform: [{ translateY }] }]}>
            <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
                {leftIcon &&(
                    <Ionicons name="arrow-back" size={24} color="#222" />
                )}
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onRightPress} style={styles.iconContainer}>
                {rightIcon &&(
                    <Ionicons name={iconName} size={24} color="#222" />
                )}
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: 'brown', // Semi-transparent brown
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 10, // Increased elevation for Android
        shadowColor: '#000',
        shadowOpacity: 0.25, // More subtle shadow
        shadowOffset: { width: 0, height: 6 }, // Deeper shadow
        shadowRadius: 10, // Softer shadow edges
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        zIndex: 10, // Ensure shadow is visible above other elements
    },
    iconContainer: {
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
});

export default NavBar;