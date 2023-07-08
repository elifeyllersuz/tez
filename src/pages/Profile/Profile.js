import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import parseContentData from '../../utils/parseContentData';
import FoodButton from '../../components/FoodButton/FoodButton';
import FoodCard from '../../components/FoodCard/FoodCard';
import AddFood from '../AddFood/AddFood';

const Profile = () => {

    const [inputModalVisible, setInputModalVisible] = React.useState(false);
    const [contentList, setContentList] = React.useState([]);
    const [loading, setLoading] = useState(true);
    const ref = firestore().collection('foods');



    const fetchFood = async () => {

        await ref.where('userId', '==', userId)
            .get()
            .then(querySnapshot => {
                const foods = [];

                querySnapshot.forEach(documentSnapshot => {

                    // const contentData = documentSnapshot.val();
                    // const parsedData = parseContentData(contentData)
                    // setContentList(parsedData);

                    foods.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,


                    });

                    // const contentData = documentSnapshot.val();
                    // const parsedData = parseContentData(contentData)
                    // setContentList(parsedData);

                });
                setContentList(foods);
                setLoading(false);
            })

        //return () => subscriber();


    }

    useEffect(() => {
        fetchFood();
    })





    function parseContentData(data) {
        return Object.keys(data).map(key => {
            return {
                id: key,
                ...data[key]
            }
        })
            .sort(function (a, b) {
                return a.date > b.date ? -1 : a.date > b.date ? 1 : 0;

            })
    }

 


    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible);

    }

    function handleSendContent(content, username,day,like,dislike) {
        handleInputToggle();
        //console.log(content);
        //console.log(name);
        sendContent(content, username, day,like,dislike);

    }
    const userId = auth().currentUser.uid
    //console.log(userId);
    function sendContent(content, username, day,like,dislike) {
        // const userId = auth().currentUser.email


        const contentObject = {
            text: content,
            username: username,
            // username: userMail.split('@')[0],
           // date: new Date().toISOString(),
            userId: userId,
            day: day,
            like:0,
            dislike:0
        }

        // console.log(contentObject);
        //  console.log("user id : " + userId);

        // database().ref('expenses/').push(contentObject);

        firestore().collection('foods').add(contentObject)
    }

    function handleLike(item,like) {
        firestore()
        .collection('foods')
        .doc(item.key)
        .update({
            like: item.like + 1
        })

    }

    function handleDislike(item,dislike) {
        firestore()
        .collection('foods')
        .doc(item.key)
        .update({
            dislike: item.dislike + 1
        })

    }

   
    return (


        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }} >
             <Text style={{textAlign:'center',
            fontSize:20,
            fontWeight:'bold'}}>Bugün ne yesek?</Text>
            <FlatList data={contentList}
                renderItem={({ item }) =>
                (<View style={{
                    alignItems: 'center',
                    borderRadius: 15,
                    backgroundColor: 'white',
                    margin: 5,
                    flexDirection: 'row'
                }}  >
                    
                    <FoodCard food={item} 
                    onLike={() => handleLike(item)}
                    // onDislike={() => {() => handleDislike(item)}}
                    />
                    <Icon style={{
                        flexDirection: 'row',
                        marginRight: 5,
                        marginTop: 5,
                        fontSize: 20,
                        marginLeft: 14
                    }} name="delete" color="red"
                        // onPress={() => database()
                        //     .ref(`expenses/${item.id}/`)
                        //     .remove()}

                           onPress={() => firestore()
                          .collection('foods')
                          .doc(item.key)
                          .delete()
                          .then(() => {
                            console.log('User deleted!');
                          })
                        }
                    
                        
                    />

                </View>
                )} />

            <FoodButton icon='add' onPress={handleInputToggle} />
            <AddFood
                visible={inputModalVisible}
                onClose={handleInputToggle}
                onSend={handleSendContent}
            />

        </SafeAreaView>

    )
}
export default Profile;