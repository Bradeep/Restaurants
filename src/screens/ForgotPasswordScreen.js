import React, { useRef } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import ForgotPasswordStyles from '../styles/ForgotPasswordStyles';
import Placeholders from '../util/Placeholders';

const styles = ForgotPasswordStyles

const ForgotPasswordScreen = () => {

    const oldPasswordRef = useRef();
    const newPasswordRef = useRef();

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
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => {
                            oldPasswordRef.current.focus();
                        }}
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
                        returnKeyType='next'
                        blurOnSubmit={false}
                        ref={oldPasswordRef}
                        onSubmitEditing={() => {
                            newPasswordRef.current.focus();
                        }}
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
                        ref={newPasswordRef}
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