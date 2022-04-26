import { StyleSheet } from 'react-native'
import Colors from '../util/Colors'

const LoginStyles = StyleSheet.create({

    viewOneStyle: {
        flex: 1,
        marginTop: 7,
        backgroundColor: Colors.WHITE,
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
        borderColor: Colors.GREY
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
        borderColor: Colors.LIGHT_GREEN,
        backgroundColor: Colors.LIGHT_GREEN
    },
    submitTextStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: Colors.BLACK
    },
    forgotPasswordStyle: {
        alignSelf: 'center',
    },
    forgotPasswordTextStyle: {
        margin: 10,
        fontSize: 20,
        textDecorationLine: 'underline',
        color: Colors.GREY
    },
    error: {
        color: Colors.RED,
        marginLeft: 15
    },

})

export default LoginStyles