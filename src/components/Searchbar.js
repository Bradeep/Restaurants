import React from 'react'
import { TextInput, View, Image } from 'react-native'
// import { Feather } from '@expo/vector-icons'   //Feather lib is available on expo website. Refer readme
import SearchBarStyles from './styles/SearchBarStyles'

const styles = SearchBarStyles

const Searchbar = ({ search, onSearchChange, onTextSubmit }) => {
    return <View style={styles.backgroundStyle}>
        <Image source={require('../../assets/search.png')} style={styles.iconStyle} />
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Search'
            style={styles.inputStyle}
            value={search}
            onChangeText={(newTerm) => onSearchChange(newTerm)}
            onEndEditing={() => onTextSubmit()}
        />
    </View>
}


export default Searchbar