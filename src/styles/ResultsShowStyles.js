import { StyleSheet } from 'react-native'
import Colors from '../util/Colors'

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
        color: Colors.BLACK
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
        color: Colors.BLACK
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
        color: Colors.BLACK
    },
    arrayStyle: {
        flex: 1
    },
    descriptionStyle: {
        fontSize: 20,
        margin: 10,
        color: Colors.GREY,

    },
    loader: {
        paddingTop: 150,
        backgroundColor: Colors.WHITE,
        flex: 1
    }
})

export default ResultsShowStyles