import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Pressable } from 'react-native';

import Credentials from '../JSON/Credentials';

import LoginStyles from '../styles/LoginStyles';

const styles = LoginStyles

const LoginScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setemailError] = useState('')
    const [passwordError, setpasswordError] = useState('')

    const verification = () => {
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
        if (flag === 1)
            props.navigation.navigate('Home')
        else {
            alert('Credentials are wrong')
        }

    }



    return (
        <View style={styles.viewOneStyle}>
            <View style={styles.credentialStyle}>
                <View
                    style={styles.inputContainerStyle}
                >
                    <Text
                        style={styles.textStyle}
                    >
                        Email:
                    </Text>
                    <TextInput
                        style={styles.inputStyle}
                        value={email}
                        placeholder='Email'
                        onChangeText={(email) => setEmail(email)}
                    />
                    <Text style={styles.error}>{emailError}</Text>
                </View>
                <View style={styles.inputContainerStyle}>
                    <Text
                        style={styles.textStyle}
                    >Password:</Text>
                    <View>
                        <TextInput
                            style={styles.inputStyle}
                            secureTextEntry={true}
                            value={password}
                            placeholder='Password'
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <Text style={styles.error}>{passwordError}</Text>
                </View>
            </View>

            <View style={{}}>
                <Pressable
                    style={styles.submitStyle}
                    onPress={() => verification()}
                >
                    <Text style={styles.submitTextStyle}>Submit</Text>
                </Pressable>
                <TouchableOpacity
                    style={styles.forgotPasswordStyle}
                    onPress={() => {
                        props.navigation.navigate('ForgotPassword')
                    }}>
                    <Text
                        style={styles.forgotPasswordTextStyle}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}



export default LoginScreen