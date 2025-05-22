import React, { FC } from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

const SearchBar: FC<SearchBarProps> = ({
    value,
    onChangeText,
    placeholder = 'Search...',
    ...rest
}) => (
    <View style={styles.container}>
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#888"
            autoCapitalize="none"
            autoCorrect={false}
            {...rest}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F1F1',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginVertical: 8,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#222',
    },
});

export default SearchBar;