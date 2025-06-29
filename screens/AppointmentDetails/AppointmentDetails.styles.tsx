import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    caregiverPic: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#ccc',
        marginRight: 16,
    },
    headerText: {
        flex: 1,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
    },
    date: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    label: {
        fontWeight: '600',
        marginTop: 12,
        color: '#1976d2',
        fontStyle: 'italic',
        marginBottom: 10, 
        fontSize: 17, 
        marginLeft: 10 
    },
    value: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
        fontWeight:"600"
    },
    address: {
        fontSize: 16,
        color: '#333',
        marginTop: 2,
    },
    card: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginVertical: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        elevation: 4,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1976d2',
    },
    outComeButton: {
        backgroundColor: '#1976d2',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    outComeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    medicationText: {
        fontSize: 16,
        color: '#333',
        marginTop: 2,
    },
    medicationList: {
        marginTop: 10,
        paddingLeft: 20,
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 2,
        borderColor: '#eee',
    },
   buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#eee',
    },
    button1: {
        flex: 1,
        backgroundColor: '#1976d2',
        paddingVertical: 14,
        borderRadius: 8,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    button2:{
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 14,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#1976d2',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        elevation: 4,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    checkbox: {
        marginRight: 10,
        borderColor: '#1976d2',
        borderWidth: 1,
        backgroundColor: '#fff',
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#1976d2',
        borderColor: '#1976d2',
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        minHeight: 80,
        padding: 10,
        textAlignVertical: 'top',
        marginBottom: 20,
    },
    endCallButton:{
        flex: 1,
        backgroundColor: 'ghostwhite',
        paddingVertical: 14,
        borderRadius: 8,
        marginHorizontal: 5,
        alignItems: 'center',
        borderColor: 'brown',
        borderWidth: 1,
    }
});

export default styles;