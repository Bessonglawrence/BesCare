import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fcf8f3',
        paddingTop: 70
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 24,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 0.5,
        borderColor: 'lightgray',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: 'ghostwhite',
    },
    passwordContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: 'ghostwhite',
    },
    passwordInput: {
        flex: 1,
        height: 50,
        paddingHorizontal: 16,
    },
    toggleButton: {
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    toggleButtonText: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#007BFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;