import React from 'react'
import {Text, StyleSheet} from 'react-native'

const Subtitle = ({title}) => {
    return (
        <Text style={styles.title}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 12,
        color: "grey",
    }
})
export default Subtitle
