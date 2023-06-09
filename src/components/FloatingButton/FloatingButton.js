import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './FloatingButtonStyle'

const Button = ({icon,onPress}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={icon} color ='white' size={30}/>
        </TouchableOpacity>
    )
}

export default Button;