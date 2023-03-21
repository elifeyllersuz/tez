import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
       // justifyContent: 'center',
        backgroundColor:'white'
    },
    inner_container: {
        paddingHorizontal: 20
    },
    image_container: {
        resizeMode: 'contain',
        alignItems: 'center',
        paddingTop:15
        //    transform:[{rotate:"-5deg"}]
    },
    register_text: {
        fontSize: 25,
        fontWeight: '500',
        color: '#3D5656',
        marginBottom: 10,
        textAlign:'center'
    },
    footer_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf:'center'
    },
    login_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30
    },
    login_text: {
        color: '#68B984',
        fontWeight: '400'
    }
})