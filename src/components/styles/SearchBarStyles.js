import { StyleSheet } from 'react-native'

const SearchBarStyles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        borderRadius: 5,
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        alignSelf: 'center',
        marginHorizontal: 15,
        height: 40,
        width: 40,
    },
})

export default SearchBarStyles