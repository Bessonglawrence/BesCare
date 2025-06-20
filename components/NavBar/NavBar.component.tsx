import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this package installed
import { MaterialIcons } from '@expo/vector-icons'; // Ensure you have this package installed
import styles from './NavBar.style';
import type { IconProps } from '@expo/vector-icons/build/createIconSet';
interface NavBarProps {
    title: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onLeftPress?: () => void;
    onRightPress?: () => void;
    style?: ViewStyle;
    iconName?: React.ComponentProps<typeof Ionicons>['name']; // Icon name for the right icon, if using Ionicons
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

// const styles = StyleSheet.create({

// });

export default NavBar;