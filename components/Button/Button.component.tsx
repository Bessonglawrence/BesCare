import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle, TextStyle } from 'react-native';

type ButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    testID?: string;
};

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    disabled = false,
    style,
    textStyle,
    testID,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabled, style]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}
            testID={testID}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
    },
    disabled: {
        backgroundColor: '#A9A9A9',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Button;