import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Pressable, } from 'react-native';
import useValidation from '../hooks/useValidation';


import LoginStyles from '../styles/LoginStyles';

const styles = LoginStyles

const LoginScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validation, emailError, passwordError] = useValidation([])


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