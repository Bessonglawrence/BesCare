import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        container: {
        height: 65,
        backgroundColor: 'brown', 
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 10, 
        shadowColor: '#000',
        shadowOpacity: 0.25, 
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

export default styles;