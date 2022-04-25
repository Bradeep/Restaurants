import React, { useState, useEffect } from 'react'
import { Text, View, Image, FlatList, ScrollView } from 'react-native'
import yelp from '../api/yelp'

import ResultsShowStyles from '../styles/ResultsShowStyles'

const styles = ResultsShowStyles

const ResultsShowScreen = ({ route: { params } }) => {

    // console.log('navigation:', navigation)
    const id = params.id
    const [result, setResult] = useState(null)

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`)
            setResult(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getResult(id)
    }, [])


    if (!result)
        return null

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>{result.name}</Text>
                <FlatList
                    horizontal={true}  //We can also write just horizontal
                    showsHorizontalScrollIndicator={false}
                    data={result.photos}
                    keyExtractor={(photo) => { return photo }}
                    renderItem={({ item }) => {
                        return <Image style={styles.image} source={{ uri: item }} />
                    }}
                />
                <View style={styles.ratingView} >
                    <Text style={styles.ratingText}>Ratings:{result.rating}, </Text>
                    <Text style={styles.ratingText}>{result.review_count} Reviews</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.detailStyle}>
                    <Text style={styles.descriptionStyle}>
                        {result.name} works on {result.hours[0].hours_type} hours
                        and it is currently {result.hours[0].is_open_now ? "Open" : "Closed"}.{"\n"}
                        The average timing of the Restaurant is from {result.hours[0].open[0].start} to {result.hours[0].open[0].end}.
                        {"\n\n"}
                        Find the details below
                    </Text>
                </View>
                <View style={styles.detailStyle}>
                    <Text style={styles.inputTitleStyle}> Services:</Text ><View style={styles.arrayStyle}>
                        {
                            result.transactions.map((transaction, key) => (
                                <Text key={key} style={styles.inputStyle}> {transaction}</Text>
                            ))
                        }
                    </View>

                </View>
                <View style={styles.detailStyle}>
                    <Text style={styles.inputTitleStyle}> Phone:</Text >
                    <Text style={styles.inputStyle}> {result.display_phone}</Text>
                </View>
                <View style={styles.detailStyle}>
                    <Text style={styles.inputTitleStyle}> Address:</Text >
                    <View style={styles.arrayStyle}>
                        {
                            result.location.display_address.map((address, key) => (
                                <Text key={key} style={styles.inputStyle}> {address}</Text>
                            ))
                        }
                    </View>
                </View>
                {result.special_hours ?
                    <View>
                        <Text>Special Hours:</Text>
                        <Text>From {result.special_hours[0].start} to {result.special_hours[0].end}</Text>
                    </View>
                    : null
                }

            </ScrollView>

        </>
    )
}

export default ResultsShowScreen