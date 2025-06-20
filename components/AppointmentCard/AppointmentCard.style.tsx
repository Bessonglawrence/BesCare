import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#fff' 
    },
    dateBar: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#f5f5f5',
    },
    dateButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#e0e0e0',
        marginRight: 8,
    },
    selectedDateButton: {
        backgroundColor: '#1976d2',
    },
    dateButtonText: {
        color: '#333',
        fontWeight: '500',
    },
    selectedDateButtonText: {
        color: '#fff',
    },
    appointmentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
    },
    caregiverPic: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#ccc',
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    timeText: {
        fontSize: 14,
        color: '#fff',
        marginTop: 4,
    },
    emptyText: {
        textAlign: 'center',
        color: '#888',
        marginTop: 32,
        fontSize: 16,
    },
    subView:{ 
        flex: 1, 
        marginLeft: 12, 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    notAttended:{ 
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 16 
    },
    upcoming:{ 
        color: '#ffd600', 
        fontWeight: 'bold', 
        fontSize: 14 
    }
});

export default styles;