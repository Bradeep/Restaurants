import React from 'react';
import { Text, Image, View } from 'react-native'

import ResultsDetailStyles from './styles/ResultsDetailStyles';

const styles = ResultsDetailStyles

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

export default ResultsDetail