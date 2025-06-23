import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 24,
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        marginTop: -40,
        borderWidth: 3,
        borderColor: '#fff',
        backgroundColor: '#eee',
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 16,
    },
    email: {
        fontSize: 16,
        color: '#888',
        marginTop: 4,
    },
    body: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F6FA',
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
    },
    buttonText: {
        marginLeft: 12,
        fontSize: 18,
        color: '#4F8EF7',
        fontWeight: '500',
    },
    infoValue: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
        textAlign: 'center',
    },
    infoLabel: {
        fontSize: 14,
        color: '#4F8EF7',
        fontWeight: 'bold',
        marginTop: 12,
        textAlign: 'center',
    },
});

export default styles;