import React from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from './CardStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = ({ name, price, date }) => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>{price} TL</Text>
                </View>
                <View style={styles.inner_container}>
                    <View style={styles.info_container}>
                        <Text style={styles.nameText}>{name}</Text>
                        <Text style={styles.dateText}>{date}</Text>
                    </View>
                </View>
                <View>
                 <Icon name='chevron-right' size={30} color='#68B984' />
                </View>


            </View>

        </TouchableWithoutFeedback>
    )
}

export default Card;