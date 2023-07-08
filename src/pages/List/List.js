import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TextInput, FlatList, View } from 'react-native';
import Button from '../../components/Button/Button';
import firestore from '@react-native-firebase/firestore';
import Icon from "react-native-vector-icons/MaterialIcons"
import Detail from '../Detail/Detail';
import auth from '@react-native-firebase/auth'


const List = () => {

    const [todo, setTodo] = useState('');
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState([]);
    const ref = firestore().collection('todos');

    const userId = auth().currentUser.uid


    // useEffect(() => {
    //     const getList = async() => {
    //         const query = query(ref, where ("userId", "==", "b0Uk2vxLhHNtwNXBwwjziSu94FS2"));
    //         const data = await getDocs(query)

    //         setTodos(data.docs.map((doc) => ({
    //             ...doc.data(),
    //             id: doc.id
    //         })))
    //     }
    //     getList();
    // },[])

    const fetchTodo = async () => {
        await ref.where('userId', '==', userId)
            .get()
            .then(querySnapshot => {
                const list = [];
                querySnapshot.forEach(doc => {
                    const { title, complete, userId } = doc.data();
                    list.push({
                        id: doc.id,
                        title,
                        complete,
                        userId
                    });
                });

                setTodos(list);

                setLoading(false);
            });
    }
    useEffect(() => {
        fetchTodo();
    });

    //  console.log("user : " + user);

    // const fetchList = async () => {

    //     try {


    //         await ref
    //             .where('userId', '==', 'b0Uk2vxLhHNtwNXBwwjziSu94FS2')
    //             .get()
    //             .then((querySnapshot) => {
    //                 const list = [];
    //                 querySnapshot.forEach((doc) => {
    //                     const { title, complete } = doc.data();
    //                     list.push({
    //                         id: doc.id,
    //                         title,
    //                         complete,
    //                     });
    //                 })
    //                 setTodos(list);

    //                 if (loading) {
    //                     setLoading(false);
    //                 }
    //             })

    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // };

    // useEffect(() => {
    //     fetchList();

    // }, []);



    async function addTodo() {
        await ref.add({
            title: todo,
            complete: false,
            userId
        });
        setTodo('');
    }

    const deleteTodo = (todos) => {
        ref
            .doc(todos.id)
            .delete()
            .then(() => {
                alert("Silme Başarılı")
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <>

            <ScrollView style={{ flex: 1 }}>
                {/* <Text>List of TODOs!</Text> */}
            </ScrollView>
            {/* <FlatList
                style={{ flex: 1 }}
                data={todos}
                renderItem={({ item }) => <Detail {...item} />}
                keyExtractor={item => item.id}
            //keyExtractor={({item}) => <Detail {...item} />}
            /> */}
            <FlatList
                data={todos}
                numColumns={1}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={{
                        backgroundColor: '#e5e5e5',
                        padding: 15,
                        borderRadius: 15,
                        margin: 5,
                        marginHorizontal: 10,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>

                        <Icon style={{
                            marginTop: 5,
                            fontSize: 20,
                            marginLeft: 14
                        }} name="delete" color="red" onPress={() => deleteTodo(item)}
                        />
                        <Text style={{ fontSize: 15, paddingLeft: 12 }}>{item.title}</Text>






                    </View>
                )} />


            <TextInput placeholder='Ne Lazım?' value={todo} onChangeText={setTodo} />
            <Button text='Gönder' onPress={addTodo} />
        </>
    );
}

export default List;