import React from 'react'
import { View, Text, ScrollView } from 'react-native';

import Input from '../../../components/InputComponent/InputComponent';
import Button from '../../../components/Button/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../auth/ForgotPassword/ForgotPasswordStyle';

const ForgotPassword = () => {

    return (
        <View style={styles.container}>

            <View style={styles.inner_container}>
                <Icon name='lock-outline' size={100} />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Giriş yaparken sorun mu yaşıyorsunuz?</Text>
                </View>

                <View style={styles.footer_container}>
                    <Text style={styles.footer_text}>
                        E-postanızı girin, size hesabınıza tekrar giriş yapmanız için bir bağlantı gönderelim.</Text>
                </View>

            </View>
            <View style={styles.input_container}>
                <Input placeholder='E-posta adresinizi giriniz' />
                <Button text='Gönder' />
            </View>


        </View>
    )
}

export default ForgotPassword;