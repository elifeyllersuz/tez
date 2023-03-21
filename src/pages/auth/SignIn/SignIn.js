import React, { useState } from 'react'
import { View, Text, Image, Button, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native';
import * as yup from "yup";
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Input from '../../../components/Input/Input';
import StyledButton from '../../../components/StyledButton/StyledButton';
import SocialChoice from '../../../components/SocialChoice/SocialChoice';

import styles from './SignInStyle';


const validationSchema = yup.object().shape({

    email: yup
        .string()
        .label("Email")
        .email()
        .required(),
    password: yup
        .string()
        .required()
        .min(8, "Şifrenizin en az 8 karakter olması gerekmektedir.")

})



const SignIn = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    function handleSignUp() {
        navigation.navigate('HomeScreen');
    }

    async function handleFormSubmit(formValues) {
        try {
            setLoading(true);
            navigation.navigate('HomeScreen')

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }


    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={require('../../../assets/images/orangebck.jpg')}
                style={styles.image}>
                <View style={styles.logoView}>
                    <Icon
                        name='progress-pencil'
                        size={100}
                        style={styles.logoIcon}
                    />
                    <Text style={styles.logo_text} >Biller</Text>
                </View>

            </ImageBackground>
            <View style={styles.footerView}>
                <View style={styles.welcomeView}>
                    <Text style={styles.welocomeText}>Hoşgeldiniz</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Hesabın yok mu?</Text>
                        <Text style={styles.registerText}>
                            {' '}Kaydol
                        </Text>
                    </View>
                </View>
                <View>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={handleFormSubmit}
                        validationSchema={validationSchema}>
                        {({ values, handleChange, handleSubmit }) => (
                            <>
                                <Input
                                    value={values.email}
                                    onType={handleChange('email')}
                                    placeholder='E-posta'
                                    iconName='account-circle'
                                />

                                <Input
                                    value={values.password}
                                    onType={handleChange('password')}
                                    placeholder='Şifre'
                                    iconName='remove-red-eye'
                                    isSecure
                                // forgot='Şifremi Unuttum '
                                />
                            </>

                        )}

                    </Formik>

                </View>

                <View style={{
                    alignItems: 'flex-end',
                    paddingRight: 25,
                    // marginBottom:1
                }}>
                    <TouchableOpacity>
                        <Text style={{ color: '#8f9195' }}>Şifremi Unuttum</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={{flexDirection:'row'}}>
                <View style={{
                    borderBottomWidth: 0.5,
                    width: Dimensions.get('window').width / 3,
                }}>
                </View>
                <Text>YA DA</Text>
                <View style={{
                    borderBottomWidth: 0.5,
                    width: Dimensions.get('window').width / 2,
                }}>
                </View>
            </View> */}
            {/* <View style={styles.footer_container} >
                <SocialChoice image={require('../../../assets/images/google_logo.png')} />
                <SocialChoice image={require('../../../assets/images/facebook_logo.png')} />

            </View> */}
            <View style={{ flex: 1 }}>
                <View style={styles.footer_container}>
                    <TouchableOpacity style={{
                        borderRadius: 15,
                        shadowOffset: { width: 1, height: 10 },
                        shadowOpacity: 0.4,
                        shadowRadius: 3,
                        elevation: 15,
                        shadowColor: '#00acee'

                    }}>
                        <Icon name='facebook'
                            style={{ color: '#3B5998' }}
                            size={35} />
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    )


}

export default SignIn;