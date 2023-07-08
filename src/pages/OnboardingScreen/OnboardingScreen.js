import React from 'react'
import { View, Text, Button, Image } from 'react-native';
import styles from './OnboardingScreenStyle';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {

    return (
        <Onboarding

            // onSkip={() => navigation.navigate("LoginScreen")}
            // onDone={() => navigation.navigate("LoginScreen")}

            onSkip={() => navigation.navigate("LoginScreen")}
            onDone={() => navigation.navigate("LoginScreen")}

            // onSkip={() => navigation.navigate("SignInScreen")}
            // onDone={() => navigation.navigate("SignInScreen")}

            // onSkip={() => navigation.navigate("SignLoginScreen")}
            // onDone={() => navigation.navigate("SignLoginScreen")}
            pages={[
                {
                    backgroundColor: '#bdd9ff',
                    image: <Image source={require('../../assets/images/check_list.png')} />,
                    title: 'Eksikleri Not Al',
                    subtitle: 'Nelere ihtiyaç varsa notlar kısmına yaz.',
                },

                {
                    backgroundColor: '#b3e59f',
                    image: <Image source={require('../../assets/images/calc_receipt.png')} />,
                    title: 'Harcamalarının Tutarını Gir',
                    subtitle: 'Kimin ne harcama yaptığını gör.',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={{width:170, height:170}} source={require('../../assets/images/food.jpg')} />,
                    title: 'Evdekilerle Bağlantıda Kal',
                    subtitle: 'Yemek fikirlerini paylaş.',
                },
            ]}
        />
    )
}

export default OnboardingScreen;