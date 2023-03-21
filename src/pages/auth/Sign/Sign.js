import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity,ScrollView } from 'react-native';
import * as yup from "yup";
import { Formik } from 'formik';
import styles from './SignStyle'

import Button from '../../../components/Button/Button';
import SocialChoice from '../../../components/SocialChoice/SocialChoice';
import Input from '../../../components/Input/Input';


const validationSchema = yup.object().shape({

    fullname: yup
        .string()
        .required("Lütfen isminizi giriniz."),
    email: yup
        .string()
        // .label("Email")
        .email("Lütfen geçerli bir e-mail adresi giriniz.")
        .required(),
    password: yup
        .string()
        .required("Şifre boş bırakılamaz.")
        .min(8, "Şifrenizin en az 8 karakter olması gerekmektedir."),
    confirmPassword: yup
        .string()
        .required("Şifre boş bırakılamaz.")
        .label("Şifreyi Doğrula")
        .test("passwords-match", "Şifreler uyuşmalı", function (value) {
            return this.parent.password === value;
        })

})



const Sign = ({ navigation }) => {

    const [loading, setLoading] = useState(false);

    function handleLogin() {
        navigation.goBack();
    }

    async function handleFormSubmit() {
        try {
            setLoading(true);
            navigation.navigate('LoginScreen')

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <ScrollView style={styles.container} >
            <View style={styles.inner_container}>
                <View style={styles.image_container}>
                    <Image source={require('../../../assets/images/friend.png')} />
                </View>
                <View>
                    <Text style={styles.register_text}>Kaydol</Text>
                </View>
                <View>
                    <Formik
                        initialValues={{ fullname: "", email: "", password: "", confirmPassword: "" }}
                        onSubmit={handleFormSubmit}
                        validationSchema={validationSchema}>
                        {({ values, handleChange, handleSubmit, setFieldTouched, touched, errors }) => (
                            <>

                                <Input
                                    value={values.fullname}
                                    onType={handleChange('fullname')}
                                    placeholder='İsminiz'
                                    iconName='person-outline'
                                    onBlur={() => setFieldTouched('fullname')} />

                                {touched.fullname && errors.fullname &&
                                    <Text style={{ fontSize: 13, color: '#FF7000', fontStyle: 'italic', paddingLeft: 15, fontWeight: 'bold', paddingBottom: 5 }}>{errors.fullname}</Text>
                                }
                                <Input
                                    value={values.email}
                                    onType={handleChange('email')}
                                    placeholder='E-posta'
                                    iconName='alternate-email'
                                    onBlur={() => setFieldTouched('email')}
                                />
                                {touched.email && errors.email &&
                                    <Text style={{ fontSize: 13, color: '#FF7000', fontStyle: 'italic', paddingLeft: 15, fontWeight: 'bold', paddingBottom: 5 }}>{errors.email}</Text>
                                }

                                <Input
                                    value={values.password}
                                    onType={handleChange('password')}
                                    placeholder='Şifre'
                                    iconName='vpn-key'
                                    isSecure
                                    onBlur={() => setFieldTouched('password')}

                                />

                                {touched.password && errors.password &&
                                    <Text style={{ fontSize: 13, color: '#FF7000', fontStyle: 'italic', fontWeight: 'bold', paddingLeft: 15 }}>{errors.password}</Text>
                                }

                                <Input
                                    value={values.confirmPassword}
                                    onType={handleChange('confirmPassword')}
                                    placeholder='Şifrenizi tekrar giriniz'
                                    iconName='vpn-key'
                                    isSecure
                                    onBlur={() => setFieldTouched('confirmPassword')}
                                />
                                {touched.confirmPassword && errors.confirmPassword &&
                                    <Text style={{ fontSize: 13, color: '#FF7000', fontStyle: 'italic', fontWeight: 'bold', paddingLeft: 15 }}>{errors.confirmPassword}</Text>
                                }

                                <Button text='Kaydol' onPress={handleSubmit} loading={loading} />


                            </>

                        )}

                    </Formik>

                </View>
            </View>
            <View style={styles.footer_container} >
                <SocialChoice image={require('../../../assets/images/google_logo.png')} />
                <SocialChoice image={require('../../../assets/images/facebook_logo.png')} />

            </View>
            <View style={styles.login_container}>
                <Text>Hesabın var mı?</Text>
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.login_text}> Giriş Yap</Text>
                </TouchableOpacity>
            </View>

        </ScrollView >
    )
}

export default Sign;