import AsyncStorage from "@react-native-community/async-storage"

export const storeData = async (email, password) => {
    try {
        await AsyncStorage.multiSet([
            ["email", email],
            ["password", password]
        ])
        console.log('Data stored:', email, password)
        return true
    } catch (error) {
        console.log('error:', error)
        return false
    }
}

export const retrieveData = async () => {
    try {
        const value = await AsyncStorage.multiGet(['email', 'password'])
        let email = value[0][1];
        //let password = value[1][1];
        console.log('Credentials:', email)
        if (!email)
            return false
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export const deleteData = async () => {
    try {

        let keys = ['email', 'password'];
        await AsyncStorage.multiRemove(keys, (err) => {
            console.log('Local storage user info removed!');
        });
        return true
    } catch (error) {
        console.log("Error in deleting the user credentials")
        return false
    }
}
