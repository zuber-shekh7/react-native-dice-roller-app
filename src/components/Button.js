import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const Button = ({title, handleOnSubmit}) => {
    return (
        <TouchableOpacity onPress={()=>handleOnSubmit()}>
            <Text style={styles.button}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        backgroundColor: "#fff",
        fontSize: 24,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
    }
})

export default Button
