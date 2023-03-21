import React from 'react'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Input = ({ placeholder, onType, value, iconName, isSecure, forgot }) => {

    return (
        <View style={styles.container}>

            <TextInput
                autoCapitalize='none'
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onType}
                secureTextEntry={isSecure} />
            <Icon name={iconName}
                style={styles.icon}
                value={value}
                size={20} />
                {/* <Entypo name={iconName}
                style={styles.icon}
                value={value}
                size={20} /> */}
                
            <TouchableOpacity
                style={styles.button}
                onPress={() => { }}>
                <Text
                    style={styles.button_text}>{forgot}</Text>
            </TouchableOpacity>


        </View>
    )


}

export default Input;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // borderColor: '#3D5656',
        borderColor:'#dbdbdb',
        borderWidth: 1,
       // paddingBottom: 0,
        marginBottom: 8,
        marginLeft:10,
        marginRight:10,
        padding:8,
        borderRadius:15,
        backgroundColor:'#f5f5f5',
        paddingVertical:5
    },

    icon: { marginRight: 8,
    color:'#3D5656' },
    input: {
        flex: 1,
        //platforma göre 
        padding: Platform.OS == 'android' ? 0 : 5,
        // paddingVertical:0
    },

    button:{
        flexDirection: 'row'
    },
    button_text:{
        color: '#FED049', fontWeight: '700'
    }

})