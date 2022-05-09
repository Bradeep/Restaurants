import { Alert } from 'react-native'
import { deleteData } from './DataStorage';

export default (navigation) => {
    return Alert.alert(
        "Log out",
        "Do you want to log out from the current session",
        [
            {
                text: "OK",
                onPress: () => {
                    deleteData()
                        .then((success) => {
                            if (success) {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Login' }],
                                });
                                navigation.navigate('Login')
                            }
                        })
                }
            },
            {
                text: "Cancel",
                style: "cancel",
                onPress: () => { }
            }
        ]
    );
}


