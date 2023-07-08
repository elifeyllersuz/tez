import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { formatDistance, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './FoodCardStyle';

const FoodCard = ({ food, onLike,onDislike }) => {

    return (
        <View style={styles.container}>
            <View style={styles.dayContainer}>
                <Text style={styles.day}>{food.day}</Text>
                <Text style={styles.nameText}>{food.username}</Text>
            </View>

            <View style={styles.inner_container}>
                <View style={styles.info_container}>
                    {/* <Text style={styles.nameText}>{food.username}</Text> */}
                    <Text style={styles.description}>{food.text}</Text>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.like_container} onPress={onLike}>
                        {!!food.like && (
                            <View style={styles.like_count_container}>
                                <Text style={styles.like_count_text}>{food.like}</Text>

                            </View>
                        )}
                        {/* <Text style={styles.like_text}>beğendim</Text> */}
                        <Icon name='thumb-up-off-alt' color ='white' size={30}/>
                       
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.like_container} onPress={onDislike}>
                        {!!food.dislike && (
                            <View style={styles.like_count_container}>
                                <Text style={styles.like_count_text}>{food.dislike}</Text>

                            </View>
                        )}
                        <Text style={styles.like_text}>beğenmedim</Text>
                       
                    </TouchableOpacity> */}
                </View>
            </View>


        </View>
    )
}

export default FoodCard;