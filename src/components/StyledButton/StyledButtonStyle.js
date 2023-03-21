import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({

    button:{
        alignSelf:'center',
        backgroundColor:'#00005C',
        width:Dimensions.get('window').width/2,
        justifyContent:'center',
        borderRadius:15
    },
    text:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:18,
    }
})