import { storeData } from '../context/DataStorage';
import Credentials from '../JSON/Credentials';
import { useState } from 'react'

export default () => {

    const [emailError, setemailError] = useState('')
    const [passwordError, setpasswordError] = useState('')

    const validation = (email, password, props) => {

        setemailError('');
        setpasswordError('');
        if (email === '') {
            setemailError('Enter email id')
            return;
        }
        if (password === '') {
            setpasswordError('Enter Password')
            return;
        }

        var flag = 0;
        Credentials.map((credentials) => {
            if (credentials.email === email) {

                if (credentials.password === password) {
                    flag = 1;
                }
            }
        })
        if (flag === 1) {
            storeData(email, password)
                .then((success) => {
                    if (success)
                        props.navigation.navigate('Home')
                })
        }
        else {
            alert('Credentials are wrong')
        }
    }

    return [validation, emailError, passwordError]
}