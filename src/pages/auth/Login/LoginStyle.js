import { transform } from '@babel/core';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
       // justifyContent: 'center',
        backgroundColor:'white'
    },
    inner_container: {
        paddingHorizontal: 25
    },
    image_container: {
        resizeMode: 'contain',
        alignItems: 'center'
        //    transform:[{rotate:"-5deg"}]
    },

    login_text: {

        fontSize: 25,
        fontWeight: '500',
        color: '#3D5656',
        marginBottom: 30,
        textAlign:'center'
    },
    footer_container: {
        flexDirection: 'row',
      //  justifyContent: 'space-evenly',
         alignSelf:'center'
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


})