import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

const Number = ({number, selected=true, handleOnPress}) => {
    const selectedStyle = selected ? {backgroundColor:"#d00", color:"#fff"} : {};
    return (
        <TouchableOpacity onPress={handleOnPress}>
            <Text style={[styles.button, selectedStyle]}>{number}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        marginHorizontal: 2,
        fontSize: 24,
        color: "#000",
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 40,
        borderWidth: 1,
    }
})
export default Number
