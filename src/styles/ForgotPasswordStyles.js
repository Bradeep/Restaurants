import { StyleSheet } from 'react-native'
import Colors from '../util/Colors'

const ForgotPasswordStyles = StyleSheet.create({
    viewOneStyle: {
        flex: 1,
        marginTop: 7,
        backgroundColor: Colors.WHITE,
    },
    textStyle: {
        color: Colors.BLACK,
        left: 10,
        fontSize: 18,
    },
    inputContainerStyle: {
        margin: 5,
    },
    credentialStyle: {
        marginTop: 50,
    },
    inputStyle: {
        borderWidth: 1.5,
        margin: 10,
        borderRadius: 10,
        fontSize: 20,
        borderColor: Colors.GREY,
        // padding: 5
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
})

export default ForgotPasswordStyles