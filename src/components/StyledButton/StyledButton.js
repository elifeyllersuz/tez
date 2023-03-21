import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './StyledButtonStyle';

const StyledButton = ({ text, onPress, loading }) => {

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )

}

export default StyledButton;