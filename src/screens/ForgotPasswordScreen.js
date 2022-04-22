import React from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import ForgotPasswordStyles from '../styles/ForgotPasswordStyles';

const styles = ForgotPasswordStyles

const ForgotPasswordScreen = () => {
    return (
        <View style={styles.viewOneStyle}>
            <View style={styles.credentialStyle}>
                <View style={styles.inputContainerStyle}>
                    <Text
                        style={styles.textStyle}
                    >
                        Email/Username:
                    </Text>
                    <TextInput
                        style={styles.inputStyle}
                    />
                </View>
                <View style={styles.inputContainerStyle}>
                    <Text
                        style={styles.textStyle}
                    >
                        Old Password:
                    </Text>
                    <TextInput
                        style={styles.inputStyle}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.inputContainerStyle}>
                    <Text
                        style={styles.textStyle}
                    >
                        New Password:
                    </Text>
                    <TextInput style={styles.inputStyle}
                        secureTextEntry={true}
                    />
                </View>
            </View>

            <Pressable
                style={styles.submitStyle}
            >
                <Text style={styles.submitTextStyle}>Submit</Text>
            </Pressable>
        </View>
    )
}


export default ForgotPasswordScreen