import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Button from '../../../components/Button'
import * as yup from "yup";
import Input from '../../../components/InputComponent'
import SocialChoice from '../../../components/SocialChoice/SocialChoice';
import { Formik } from "formik";
import auth from '@react-native-firebase/auth';

const validationSchema = yup.object().shape({
    name: yup
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
});

const initialFormValues = {
    name:"",
    email: "",
    password: "",
    confirmPassword:""
};

const SignPage = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    function handleLogin() {
        navigation.navigate('LoginScreen')
    }

    // function handleSignUp() {
    //     navigation.navigate("SignScreen");
    // }

    // function handleSubmit(){
    //     navigation.navigate('FeedScreen')
    // }

    async function handleFormSubmit(formValues) {


        try {
            await auth().createUserWithEmailAndPassword(
                formValues.email,
                formValues.password
            )
            //navigation.navigate('LoginScreen');
            //  setLoading(false);
        } catch (error) {
            console.log(error);
            //setLoading(false);
        }
    }

    return (
        <View style={styles.inner_container}>
            <View style={styles.image_container}>
                <Image source={require("../../../assets/images/moneyLogin.jpeg")} style={{ width: 100, height: 70 }} />
            </View>
            <View>
                <Text style={styles.login_text}>Kaydol</Text>
            </View>
            <View>
                <Formik
                    initialValues={initialFormValues}
                    onSubmit={handleFormSubmit}
                    validationSchema={validationSchema}
                >
                    {({ values, handleChange, handleSubmit, setFieldTouched, touched, errors }) => (

                        <>

                            <Input
                                value={values.name}
                                onType={handleChange('name')}
                                placeholder='İsminiz'
                                iconName='person-outline'
                                onBlur={() => setFieldTouched('name')} />

                            {touched.name && errors.name &&
                                <Text style={{ fontSize: 13, color: '#FF7000', fontStyle: 'italic', paddingLeft: 15, fontWeight: 'bold', paddingBottom: 5 }}>{errors.name}</Text>
                            }

                            {/* <View style={{ paddingTop: 10 }}> */}
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
                            {/* <Input
                                    value={values.email}
                                    onType={handleChange('email')}
                                    placeholder='e-postanızı giriniz'
                                    iconName='alternate-email'
                                /> */}

                            <Input
                                value={values.password}
                                onType={handleChange('password')}
                                placeholder='Şifre'
                                iconName='vpn-key'
                                isSecure
                                onBlur={() => setFieldTouched('password')}
                            //   forgot='Şifremi Unuttum '
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
            {/* <View style={styles.footer_container} >
                <SocialChoice image={require('../../../assets/images/google_logo.png')} />
                <SocialChoice image={require('../../../assets/images/facebook_logo.png')} />

            </View> */}
            <View style={styles.signup_container}>
                <Text>Hesabın var mı?</Text>
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.signup_text}> Giriş Yap</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default SignPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: "white",
    },
    inner_container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: "white",
    },
    image_container: {
        resizeMode: "contain",
        alignItems: "center",
        marginBottom: 5,
        marginLeft: 5
        //    transform:[{rotate:"-5deg"}]
    },

    login_text: {
        fontSize: 25,
        fontWeight: "500",
        color: "#3D5656",
        marginBottom: 30,
        textAlign: "center",
    },
    footer_container: {
        flexDirection: 'row',
        //  justifyContent: 'space-evenly',
        alignSelf: 'center'
    },
    signup_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30
    },
    signup_text: {
        color: '#68B984',
        fontWeight: '450'
    }
});