import { StyleSheet } from 'react-native'

const HomeStyles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'white',
        flex: 1
    },
    header: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 15
    },
    headerText: {
        flex: 1
    },
    welcome: {
        fontSize: 15,
        color: 'black'
    },
    nameStyle: {
        fontSize: 25,
        color: 'black'
    },
    image: {
        height: 35,
        width: 35,
        alignSelf: 'center',
        marginRight: 15
    }
})

export default HomeStyles