import { StyleSheet } from 'react-native'
import Colors from '../util/Colors'

const HomeStyles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.WHITE,
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
        color: Colors.BLACK
    },
    nameStyle: {
        fontSize: 25,
        color: Colors.BLACK
    },
    image: {
        height: 35,
        width: 35,
        alignSelf: 'center',
        marginRight: 15
    }
})

export default HomeStyles