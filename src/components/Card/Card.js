import React from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from './CardStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatDistance, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

const Card = ({ expense }) => {
    const formattedDate = formatDistance(parseISO(expense.date), new Date(),
    {
        addSuffix: true,
        locale: tr
    })
    return (
       
            <View style={styles.container}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>{expense.text} TL</Text>
                </View>
                <View style={styles.inner_container}>
                    <View style={styles.info_container}>
                        <Text style={styles.nameText}>{expense.username}</Text>
                        <Text style={styles.description}>{expense.description}</Text>
                        <Text style={styles.dateText}>{formattedDate}</Text>
                    </View>
                </View>
                <View>
                
                </View>


            </View>

        
    )
}

export default Card;