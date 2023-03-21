import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import styles from './LoginStyle';
import Input from '../../../components/Input/Input';
import * as yup from "yup";

import Button from '../../../components/Button/Button';
import SocialChoice from '../../../components/SocialChoice/SocialChoice';

import { Formik } from 'formik';

const validationSchema = yup.object().shape({

    email: yup
        .string()
       // .label("Email")
        .email("Lütfen geçerli bir e-mail adresi giriniz.")
        .required(),
    password: yup
        .string()
        .required("Şifre boş bırakılamaz.")
        .min(8, "Şifrenizin en az 8 karakter olması gerekmektedir.")

})

const initialFormValues = {
    email :'',
    password:''

}



const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    function handleSignUp() {
        navigation.navigate('SignScreen');
    }

    // function handleSubmit(){
    //     navigation.navigate('FeedScreen')
    // }

   async function handleFormSubmit() {


    try {
        setLoading(true);
        navigation.navigate('HomeStackScreen')

    } catch (error) {
        console.log(error);
        setLoading(false);
    }

    }

  

    return (
        <ScrollView style={styles.container} >
            <View style={styles.inner_container}>
                <View style={styles.image_container}>
                    <Image source={require('../../../assets/images/moneyLogin.jpeg')} />
                </View>
                <View>
                    <Text style={styles.login_text}>Giriş Yap</Text>
                </View>
                <View>
                    <Formik
                        initialValues={initialFormValues}
                        onSubmit={handleFormSubmit}
                       validationSchema={validationSchema}
                        >
                        {({ values, handleChange, handleSubmit,setFieldTouched,touched,errors }) => (

                            <>

                                {/* <View style={{ paddingTop: 10 }}> */}
                                <Input
                                    value={values.email}
                                    onType={handleChange('email')}
                                    placeholder='E-posta'
                                    iconName='alternate-email'
                                    onBlur={() => setFieldTouched('email')}
                                />
                                 {touched.email && errors.email &&
              <Text style={{ fontSize: 13, color: '#FF7000',fontStyle:'italic',paddingLeft:15 ,fontWeight:'bold',paddingBottom:5}}>{errors.email}</Text>
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
              <Text style={{ fontSize: 13, color: '#FF7000',fontStyle:'italic',fontWeight:'bold',paddingLeft:15  }}>{errors.password}</Text>
            }    

                                {/* </View> */}

                                {/* <View style={{
                                    alignItems: 'flex-end',
                                    paddingRight: 25,
                                    // marginBottom:1
                                }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: '#8f9195' }}>Şifremi Unuttum</Text>
                                    </TouchableOpacity>
                                </View> */}

                                <Button text='Giriş Yap' onPress={handleSubmit} loading={loading} />
                                {/* <TouchableOpacity onPress={handleSubmit}>
                                    <Text>Giriş Yap</Text>
                                </TouchableOpacity> */}

                            </>

                        )}

                    </Formik>


                </View>
            </View>
            <View style={styles.footer_container} >
                <SocialChoice image={require('../../../assets/images/google_logo.png')} />
                <SocialChoice image={require('../../../assets/images/facebook_logo.png')} />

            </View>

            <View style={styles.signup_container}>
                <Text>Hesabın yok mu?</Text>
                <TouchableOpacity onPress={handleSignUp}>
                    <Text style={styles.signup_text}> Kaydol</Text>
                </TouchableOpacity>
            </View>

        </ScrollView >
    )
}

export default Login;