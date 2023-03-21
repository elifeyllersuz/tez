import React from 'react'
import { View, Text, Button, Image } from 'react-native';
import styles from './OnboardingScreenStyle';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {

    return (
        <Onboarding

            // onSkip={() => navigation.navigate("LoginScreen")}
            // onDone={() => navigation.navigate("LoginScreen")}

            onSkip={() => navigation.navigate("AnimationScreen")}
            onDone={() => navigation.navigate("AnimationScreen")}

            // onSkip={() => navigation.navigate("SignInScreen")}
            // onDone={() => navigation.navigate("SignInScreen")}

            // onSkip={() => navigation.navigate("SignLoginScreen")}
            // onDone={() => navigation.navigate("SignLoginScreen")}
            pages={[
                {
                    backgroundColor: '#bdd9ff',
                    image: <Image source={require('../../assets/images/check_list.png')} />,
                    title: 'Eksikleri Not Al ',
                    subtitle: 'Eksikleri Not Al ve Güncelle',
                },

                {
                    backgroundColor: '#b3e59f',
                    image: <Image source={require('../../assets/images/calc_receipt.png')} />,
                    title: 'Hesap Yapmakla Uğraşma',
                    subtitle: 'Tutarları Gir Borçlar Hesaplansın',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../assets/images/connect.png')} />,
                    title: 'Evdekilerle Bağlantıda Kal',
                    subtitle: 'Evdekilerle Kolayca İletişim Kur',
                },
            ]}
        />
    )
}

export default OnboardingScreen;