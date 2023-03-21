import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native';
import styles from './MenuStyle';

const Menu = ({title}) => {

    return (
        <View style={styles.container} >
          <TouchableOpacity style={styles.box} >
            <Text style={styles.text}>{title}</Text>
          </TouchableOpacity>
        </View>

    )
}

export default Menu;