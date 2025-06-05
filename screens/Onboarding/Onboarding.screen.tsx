import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const ONBOARDING_DATA = [
    {
        key: '1',
        title: 'Welcome to BesCare',
        description: 'Your journey to better health starts here.',
    },
    {
        key: '2',
        title: 'Track Your Progress',
        description: 'Monitor your health and stay motivated.',
    },
    {
        key: '3',
        title: 'Get Personalized Tips',
        description: 'Receive advice tailored just for you.',
    },
];

const OnboardingScreen = ({ navigation }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const handleNext = () => {
        if (currentIndex < ONBOARDING_DATA.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            // Replace with your navigation logic
            navigation?.replace('Login');
        }
    };

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={ONBOARDING_DATA}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (
                    <View style={styles.screen}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                )}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
            />
            <View style={styles.pagination}>
                {ONBOARDING_DATA.map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.dot,
                            currentIndex === i && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 32 }}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        { flex: 1, marginRight: 8, backgroundColor: currentIndex === 0 ? '#ccc' : '#007AFF' },
                    ]}
                    onPress={() => {
                        if (currentIndex > 0) {
                            flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
                        }
                    }}
                    disabled={currentIndex === 0}
                >
                    <Text style={styles.buttonText}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { flex: 1, marginLeft: 8 }]} onPress={handleNext}>
                    <Text style={styles.buttonText}>
                        {currentIndex === ONBOARDING_DATA.length - 1 ? 'Get Started' : 'Next'}
                    </Text>
                </TouchableOpacity>
            </View>
                <Text style={styles.buttonText}>
                    {currentIndex === ONBOARDING_DATA.length - 1 ? 'Get Started' : 'Next'}
                </Text>
            </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center' },
    screen: { width, alignItems: 'center', justifyContent: 'center', padding: 32 },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16, color: '#333' },
    description: { fontSize: 18, textAlign: 'center', color: '#666' },
    pagination: { flexDirection: 'row', justifyContent: 'center', marginVertical: 24 },
    dot: {
        width: 8, height: 8, borderRadius: 4, backgroundColor: '#ccc', margin: 4,
    },
    activeDot: { backgroundColor: '#007AFF', width: 16 },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        borderRadius: 8,
        marginHorizontal: 32,
        alignItems: 'center',
        marginBottom: 32,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default OnboardingScreen;