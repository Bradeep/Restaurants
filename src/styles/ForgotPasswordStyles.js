import { StyleSheet } from 'react-native'

const ForgotPasswordStyles = StyleSheet.create({
    viewOneStyle: {
        flex: 1,
        marginTop: 7,
        backgroundColor: 'white',
    },
    textStyle: {
        color: 'black',
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
        borderColor: 'grey',
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
        borderColor: '#9ACD32',
        backgroundColor: '#9ACD32'
    },
    submitTextStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'black'
    },
})

export default ForgotPasswordStyles