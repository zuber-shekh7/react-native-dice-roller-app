import React from 'react'
import {Text, StyleSheet} from 'react-native'

const Title = ({title}) => {
    return (
        <Text style={styles.title}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        color: "#fff",
        fontWeight: "bold"
    }
})
export default Title
