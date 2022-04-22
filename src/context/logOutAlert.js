import { Alert } from 'react-native'

export default (navigation) => {
    return Alert.alert(
        "Log out",
        "Do you want to log out from the current session",
        [
            {
                text: "OK",
                onPress: () => { navigation.navigate('Login') }
            },
            {
                text: "Cancel",
                style: "cancel"
            }
        ]
    );
}