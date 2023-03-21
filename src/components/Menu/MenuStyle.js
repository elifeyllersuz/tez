import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container:{
         flex:1,
        // flexDirection:'column'
        justifyContent:'space-evenly'
         
    },
    box:{
        padding:30,
        borderWidth:1,
        margin:25,
        backgroundColor:'#95CD41',
        borderColor:'#95CD41',
        borderRadius:20
        // justifyContent:'center',
        // alignItems:'center'
        
    },

    text:{
         fontSize:25,
         textAlign:'center',
         color:'white',
         
    }
})