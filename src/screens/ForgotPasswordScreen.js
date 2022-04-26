import React from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import ForgotPasswordStyles from '../styles/ForgotPasswordStyles';
import Placeholders from '../util/Placeholders';

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
                        placeholder={Placeholders.USERNAME}
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
                        placeholder={Placeholders.OLD_PASSWORD}
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
                        placeholder={Placeholders.NEW_PASSWORD}
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