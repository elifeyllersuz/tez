import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import OnboardingScreen from './pages/OnboardingScreen';
import Login from './pages/auth/Login/Login';
import Sign from './pages/auth/Sign/Sign';
import Home from './pages/Home/Home';
import Feed from './pages/Feed/Feed'
import Profile from './pages/Profile/Profile';
import List from './pages/List/List';
import Animation from './pages/auth/Animation';
import LoginPage from './pages/auth/LoginPage/LoginPage';
import SignPage from './pages/auth/SignPage/SignPage';
import AddBill from './pages/AddBill/AddBill';
import auth from '@react-native-firebase/auth'
import ForgotPassword from './pages/auth/ForgotPassword';
import Detail from './pages/Detail/Detail';

// import SignIn from './pages/auth/SignIn/SignIn';
// import SignLogin from './pages/auth/SignLogin.js/SignLogin';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




const App = () => {


    const [userSession, setUserSession] = React.useState();

    React.useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUserSession(!!user)
        })
    }, [])


    const WelcomeStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />
                <Stack.Screen name='LoginScreen' component={LoginPage} />
                <Stack.Screen name='SignScreen' component={SignPage} />
            </Stack.Navigator>
        )

    }
    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='LoginScreen' component={LoginPage} />
                <Stack.Screen name='SignScreen' component={SignPage} />

            </Stack.Navigator>

        )
    }
    const ListStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='ListScreen' component={List}/>
                <Stack.Screen name='Detail' component={Detail} />

            </Stack.Navigator>
        )
    }

    const HomeStackScreen = ({ navigation }) => {
        return (
            <Tab.Navigator
                initialRouteName='Feed' screenOptions={{
                    //headerShown: false,
                    tabBarInactiveTintColor: 'white',
                    tabBarActiveTintColor: '#68B984',

                    tabBarStyle: {
                        backgroundColor: 'white'
                    }
                }}
            >
                <Tab.Screen name='FeedScreen' component={Feed}
                    options={{
                        title: 'Harcamalar',
                        headerTintColor: '#68B984',
                        // headerRight: () => (

                        //     <Icon name='add-circle-outline'
                        //         size={30}
                        //         color='#68B984'
                        //        onPress={() => navigation.navigate('AddBill')}
                        //     />

                        // ),
                        tabBarIcon: ({ focused, color }) => (
                            <Icon
                                focused={focused}
                                name="home"
                                color={color}
                                size={28}
                            />
                        )


                    }} 

                    //     tabBarIcon: () => (
                    //         <Icon name='home'
                    //             size={30}
                    //             color='#d9d9d8'
                    //         />
                    //     )
                    // }}
                     />
               
                    <Tab.Screen name='ListStack' component={ListStack}
                        options={{
                            title: 'İhtiyaçlar',
                            headerTintColor: '#68B984',

                            tabBarIcon: ({ focused, color }) => (
                                <Icon
                                    focused={focused}
                                    name="list-alt"
                                    color={color}
                                    size={25}
                                />
                            )
    
    
                        }} 

                        //     tabBarIcon: () => (
                        //         <Icon name='list-alt'
                        //             size={30}
                        //             color='#d9d9d8'
                        //         />
                        //     )
                        // }} 
                        
                        />
                
                <Tab.Screen name='ProfileScreen' component={Profile}
                    options={{
                        title: 'Yemekler',
                        headerTintColor: '#68B984',
                        headerRight: () => (
                            <Icon name='logout'
                                size={30}
                                color='#68B984'
                                onPress={() => auth().signOut()} />
                        ),

                        tabBarIcon: ({ focused, color }) => (
                            <Icon
                                focused={focused}
                                name="account-circle"
                                color={color}
                                size={25}
                            />
                        )
    
    
                    }} 
                    //     tabBarIcon: () => (

                    //         <Icon name='account-circle'
                    //             size={30}
                    //             color='#d9d9d8'

                    //         />
                    //     ),

                    // }} 
                    />
            </Tab.Navigator>
        )
    }


    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {userSession ? (
                    <>
                        <Stack.Screen name='HomeStackScreen' component={HomeStackScreen} />
                        <Stack.Screen name='AddBill' component={AddBill} />

                      


                    </>
                ) : (
                    <>
                        <Stack.Screen name='WelcomeStack' component={WelcomeStack} />
                        <Stack.Screen name='AuthStack' component={AuthStack} />

                        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />




                    </>
                )}


            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default App;