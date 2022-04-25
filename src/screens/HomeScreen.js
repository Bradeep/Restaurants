import React, { useState, } from 'react'
import { Text, View, ScrollView, Image, Pressable, } from 'react-native'
import Searchbar from '../components/Searchbar'
import ResultsList from '../components/ResultsList'

import useResults from '../hooks/useResults'
import logOutAlert from '../context/logOutAlert'

import HomeStyles from '../styles/HomeStyles'


const styles = HomeStyles

const HomeScreen = ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    // //console.log(results)

    const filterByPrice = (price) => {
        return results.filter(result => {   //.filter is an inbulit fn.
            return result.price === price
        })
    }


    return <View style={styles.backgroundStyle}>
        <View style={styles.header}>
            <View style={styles.headerText}>
                <Text style={styles.nameStyle}>Hi, Bradeep</Text>
                <Text style={styles.welcome}>Get your favorite food here!</Text>
            </View>
            <Pressable
                onPress={() => logOutAlert(navigation)}
            >
                <Image source={require('../../assets/logout.png')} style={styles.image} />
            </Pressable>

        </View>


        <Searchbar
            search={search}
            onSearchChange={(newTerm) => setSearch(newTerm)}
            onTextSubmit={() => searchApi(search)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList results={filterByPrice('$')} title='Cost Effective' navigation={navigation} />
            <ResultsList results={filterByPrice('$$')} title='Bit Pricier' navigation={navigation} />
            <ResultsList results={filterByPrice('$$$')} title='Costlier' navigation={navigation} />
            <ResultsList results={filterByPrice('$$$$')} title='Luxurious' navigation={navigation} />

        </ScrollView>

    </View>
}


export default HomeScreen