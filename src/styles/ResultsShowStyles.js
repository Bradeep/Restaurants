import { StyleSheet } from 'react-native'

const ResultsShowStyles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginLeft: 10,
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 5
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black'
    },
    container: {
        // flex: 1,
    },
    inputStyle: {
        fontSize: 20,
        margin: 10,
        //flex: 3,

    },
    inputTitleStyle: {
        fontSize: 22,
        margin: 5,
        //flex: 1,
        alignSelf: 'stretch',
        color: 'black'
    },
    detailStyle: {
        flexDirection: 'row',
        //alignItems: 'flex-start'
    },
    ratingView: {
        flexDirection: 'row',
        marginLeft: 12,
        marginTop: 8
    },
    ratingText: {
        fontSize: 17,
        color: 'black'
    },
    arrayStyle: {
        flex: 1
    },
    descriptionStyle: {
        fontSize: 20,
        margin: 10,
        color: 'grey',

    }
})

export default ResultsShowStyles