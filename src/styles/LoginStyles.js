import { StyleSheet } from 'react-native'

const LoginStyles = StyleSheet.create({

    viewOneStyle: {
        flex: 1,
        marginTop: 7,
        backgroundColor: 'white',
    },
    credentialStyle: {
        marginTop: 50,
    },
    inputContainerStyle: {
        margin: 10,
    },

    textStyle: {
        left: 10,
        fontSize: 25,
    },
    inputStyle: {
        borderWidth: 2,
        marginTop: 10,
        marginHorizontal: 12,
        borderRadius: 10,
        fontSize: 20,
        borderColor: 'grey'
    },
    submitStyle: {
        // flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 40,
        margin: 10,
        borderWidth: 2,
        padding: 10,
        borderRadius: 15,
        width: 350,
        height: 50,
        borderColor: '#9ACD32',
        backgroundColor: '#9ACD32'
    },
    submitTextStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'black'
    },
    forgotPasswordStyle: {
        alignSelf: 'center',
    },
    forgotPasswordTextStyle: {
        margin: 10,
        fontSize: 20,
        textDecorationLine: 'underline',
        color: 'grey'
    },
    error: {
        color: 'red',
        marginLeft: 15
    },

})

export default LoginStyles