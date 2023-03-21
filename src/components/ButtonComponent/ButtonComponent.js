import React from 'react'
import { View, TouchableOpacity, Text,Image, StyleSheet } from 'react-native';


const Button = ({ text, onPress, loading,image }) => {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            disabled={loading}>
            <Text style={styles.title}>{text}</Text>

        </TouchableOpacity>
    )
}
export default Button;

const styles = StyleSheet.create({
    
    container: {
        padding: 8,
        margin: 10,

        backgroundColor: '#68B984',
        borderRadius: 15
    },
    title: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    },


})