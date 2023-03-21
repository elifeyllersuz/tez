import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Card from '../../components/Card/Card';
import Menu from '../../components/Menu/Menu';
import { ScrollView } from 'react-native-gesture-handler';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Feed = () => {

    return (


        <ScrollView style={{backgroundColor:'white'}} >
            {/* <Menu title='Eksikler'/> */}
            <Card name='Elif' price='100' date='01.01.01' />
            <Card name='Elif' price='2000' date='01.01.01' />
            <Card name='Elif' price='2000' date='01.01.01' />
            <Card name='Elif' price='2000' date='01.01.01' />
            {/* <FloatingButton icon='add'/> */}

        </ScrollView>




    )
}


export default Feed;