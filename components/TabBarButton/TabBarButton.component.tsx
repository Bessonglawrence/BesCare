import React, { useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, GestureResponderEvent, Pressable } from 'react-native';
import { icon } from '@/constants/icon';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type IconKeys = keyof typeof icon;

type TabBarButtonProps = {
    label: string;
    focused?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
    onLongPress?: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    routeName: IconKeys;
    colors?:string;
    isFocused?: boolean; // Optional prop to indicate if the button is focused
};

const TabBarButton: React.FC<TabBarButtonProps> = ({
    label,
    onPress,
    onLongPress,
    isFocused = false,  // Default to false if not provided     
    routeName,// Default to undefined if not provided 
}) => {
    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : Number(isFocused), {duration:350});
    }
    , [isFocused, scale]);

    const animateTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0]);
        return { opacity };
    })

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [0.8, 1.5]);
        const top = interpolate(scale.value, [0, 1], [0, 9]);
        return { transform: [{ scale: scaleValue }], top: top };
    }
    );
    return (
         <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            <Animated.View style={[styles.icon, animatedIconStyle]}>
                {icon[routeName]({ color: isFocused ? "ghostwhite" : "#222"})}
            </Animated.View>
            <Animated.Text style={[{ color: isFocused ? "ghostwhite" : "#222", fontSize: 12, fontWeight: '600' }, animateTextStyle]}>
                {(label as string).charAt(0).toUpperCase() + (label as string).slice(1)}
            </Animated.Text>
          </Pressable>
    );
};

export default TabBarButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: '#fff',
    },
    focused: {
        backgroundColor: '#e0e0e0',
    },
    icon: {
        marginBottom: -4,
    },
    label: {
        fontSize: 14,
        color: '#333',
    },
    labelFocused: {
        color: '#007aff',
        fontWeight: 'bold',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        padding: 10,
    }
});