import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, TextInput, Pressable, } from 'react-native';
import SplashScreen from "react-native-splash-screen"

import useValidation from '../hooks/useValidation';

import { retrieveData } from '../functions/DataStorage';

import Placeholders from '../util/Placeholders';
import LoginStyles from '../styles/LoginStyles';

const styles = LoginStyles

const LoginScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validation, emailError, passwordError] = useValidation([])
    const passwordRef = useRef();

    useEffect(() => {
        retrieveData()
            .then((success) => {
                if (success === true) {
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    });
                    props.navigation.navigate('Home')
                }
            })
            .then(() => { SplashScreen.hide() })
    }, [])

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
                        returnKeyType='next'
                        placeholder={Placeholders.EMAIL}
                        onChangeText={(email) => setEmail(email)}
                        blurOnSubmit={false}
                        onSubmitEditing={() => {
                            passwordRef.current.focus();
                        }}
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
                            placeholder={Placeholders.PASSWORD}
                            ref={passwordRef}
                            onChangeText={(password) => setPassword(password)}
                            onSubmitEditing={() => validation(email, password, props)}
                        />
                    </View>
                    <Text style={styles.error}>{passwordError}</Text>
                </View>
            </View>

            <View style={{}}>
                <Pressable
                    style={styles.submitStyle}
                    onPress={() => validation(email, password, props)}
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