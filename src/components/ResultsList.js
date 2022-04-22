import React from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultsDetail'

import ResultsListStyles from './styles/ResultsListStyles'

// import { withNavigation } from 'react-navigation'

const styles = ResultsListStyles

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length)
        return true

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal={true}  //We can also write just horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default ResultsList