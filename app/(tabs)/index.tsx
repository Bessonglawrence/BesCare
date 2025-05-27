import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Welcome to the Home Page!</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default HomeScreen;