import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '95%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        elevation: 5,
        position: 'relative',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
        textAlign: 'center',
    },
    closeButton: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: 'ghostwhite',
        borderColor: 'brown',
        borderWidth: 1,
        alignSelf: 'center',
        marginBottom: 40
    },
    closeText: {
        fontSize: 35,
        color: 'brown',
        fontWeight: 'bold'
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
    content: {
        marginTop: 24,
    },
    recordButton:{
        marginLeft: 'auto',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        marginVertical: 6
    },
    pickerView:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        overflow: 'hidden',
        backgroundColor: '#fafafa',
    },
    pickerMain:{ 
        marginLeft: 40, 
        marginTop: 6, 
        marginBottom: 12 
    },
    outCome:{ 
        fontSize: 14, 
        marginBottom: 4 
    }
});

export default styles;