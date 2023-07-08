import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Card from '../../components/Card/Card';
import Menu from '../../components/Menu/Menu';
import { ScrollView } from 'react-native-gesture-handler';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AddBill from '../AddBill/AddBill';
import firestore from '@react-native-firebase/firestore';


import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import parseContentData from '../../utils/parseContentData';

const Feed = () => {

    const [inputModalVisible, setInputModalVisible] = React.useState(false);
    const [contentList, setContentList] = React.useState([]);
    const [loading, setLoading] = useState(true);
    const ref = firestore().collection('feeds');


    const fetchFeed = async () => {

        await ref.where('userId', '==', userId)
            .get()
            .then(querySnapshot => {
                const feeds = [];

                querySnapshot.forEach(documentSnapshot => {

                    // const contentData = documentSnapshot.val();
                    // const parsedData = parseContentData(contentData)
                    // setContentList(parsedData);

                    feeds.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,


                    });

                    // const contentData = documentSnapshot.val();
                    // const parsedData = parseContentData(contentData)
                    // setContentList(parsedData);

                });
                setContentList(feeds);
                setLoading(false);
            })

        //return () => subscriber();


    }

    useEffect(() => {
        fetchFeed();
    })

    // useEffect(() => {
    //    ref
    //     .where('userId', '==', userId)
    //     .get()
    //     .then(querySnapshot => {
    //             const feeds = [];
    //             querySnapshot.forEach(documentSnapshot => {
    //                 //const { title, complete } = doc.data();
    //                 feeds.push({
    //                     ...documentSnapshot.data(),
    //                     key: documentSnapshot.id,


    //                 });
    //             });

    //             setContentList(contentList);

    //             if (loading) {
    //                 setLoading(false);
    //             }
    //         });
    // }, []);





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

    /****SON */
    // useEffect(() => {
    //     //const subscriber = firestore()
    //     // return
    //     // firestore()
    //     // .collection('feeds')
    //     ref.where('userId', '==', userId)
    //         .get()
    //         .then(querySnapshot => {
    //             const feeds = [];

    //             querySnapshot.forEach(documentSnapshot => {

    //                 // const contentData = documentSnapshot.val();
    //                 // const parsedData = parseContentData(contentData)
    //                 // setContentList(parsedData);

    //                 feeds.push({
    //                     ...documentSnapshot.data(),
    //                     key: documentSnapshot.id,


    //                 });

    //                 // const contentData = documentSnapshot.val();
    //                 // const parsedData = parseContentData(contentData)
    //                 // setContentList(parsedData);

    //             });
    //             setContentList(feeds);
    //             setLoading(false);
    //         })

    //     //return () => subscriber();
    // }, [])





    // React.useEffect(() => {
    //         firestore()
    //         .collection('feeds')
    //         .onSnapshot('value', snapshot => {
    //             const contentData = snapshot.val();
    //             const parsedData = parseContentData(contentData)
    //             setContentList(parsedData);
    //             // console.log(contentData);
    //         });
    // }, []);

    // function handleInputToggle() {
    //     setInputModalVisible(!inputModalVisible);

    // }

    // React.useEffect(() => {
    //     firestore()
    //         .collection('feeds')
    //         .onSnapshot('value', snapshot => {
    //             const contentData = snapshot.val();
    //             const parsedData = parseContentData(contentData)
    //             setContentList(parsedData);
    //             // console.log(contentData);
    //         });
    // }, []);



    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible);

    }

    function handleSendContent(content, username, description) {
        handleInputToggle();
        //console.log(content);
        //console.log(name);
        sendContent(content, username, description);

    }
    const userId = auth().currentUser.uid
    //console.log(userId);
    function sendContent(content, username, description) {
        // const userId = auth().currentUser.email


        const contentObject = {
            text: content,
            username: username,
            // username: userMail.split('@')[0],
            date: new Date().toISOString(),
            userId: userId,
            description: description
        }

        // console.log(contentObject);
        //  console.log("user id : " + userId);

        // database().ref('expenses/').push(contentObject);

        firestore().collection('feeds').add(contentObject)
    }

    const deleteFeed = (feed) => {
        //console.log(feed.id)
        ref
            .doc(feed.id)
            .delete()
            .then(() => {
                alert("Silme Başarılı")
            })
            .catch(error => {
                alert(error)
            })
    }


    //  const text = route.params.text;
    // console.log(text);
    // const userMail = auth().currentUser.email;
    // const contentObject = {
    //     text : text,
    //     username : userMail.split('@')[0],
    //     date: new Date().toISOString()

    // }
    // database().ref('expenses/').push(contentObject);
    // console.log(contentObject);



    const renderContent = ({ item }) => <Card expense={item} />
    return (


        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }} >

            <FlatList data={contentList}
                numColumns={1}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                (<View style={{
                    // alignItems: 'center',
                    // borderRadius: 15,
                    // backgroundColor: 'white',
                     margin: 5,
                    // flexDirection: 'row'
                   // backgroundColor: '#e5e5e5',
                    
                        borderRadius: 15,
                    
                        marginHorizontal: 10,
                        flexDirection: 'row',
                        alignItems: 'center'
                }}  >
                    <Card expense={item} />
                    <Icon style={{
                        flexDirection: 'row',
                        marginRight: 5,
                        marginTop: 5,
                        fontSize: 20,
                        marginLeft: 14
                    }} name="delete"
                        //color="#68B984"
                        color="red"
                        // onPress={() => database()
                        //     .ref(`expenses/${item.id}/`)
                        //     .remove()}

                        onPress={() => firestore()
                            .collection('feeds')
                            .doc(item.key)
                            .delete()
                            .then(() => {
                                console.log('User deleted!');
                            })
                        }


                    />

                </View>
                )} />

            <FloatingButton icon='add' onPress={handleInputToggle} />
            <AddBill
                visible={inputModalVisible}
                onClose={handleInputToggle}
                onSend={handleSendContent}
            />

        </SafeAreaView>

    )
}
export default Feed;