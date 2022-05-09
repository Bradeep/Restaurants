import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native';

import LoaderStyles from "./styles/LoaderStyles";

const styles = LoaderStyles

const Loader = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.loader}
                source={require('../../assets/coffee-cup.gif')}
            />
        </View>
    );
}

export default Loader;
