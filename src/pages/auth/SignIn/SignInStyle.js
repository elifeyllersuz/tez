import { StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container: { 
        flex: 1,
         backgroundColor: 'white'
        },
        image:{
            height: Dimensions.get('window').height / 2.5
        },
    logoView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoIcon: {
        color: '#ffffff',
        //fontSize: 100
    },
    logo_text:{
        color:'#ffffff',
        fontSize:30,
        fontWeight:'bold',
        textTransform:'uppercase'
    },
    footerView:{
        flex:1.5,
        backgroundColor:'#ffffff',
        bottom:30,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        
    },
    welcomeView:{
        padding:25,
       
    },
    welocomeText:{
        color:'#FF7F3F',
        fontSize:23
    },
    registerText:{
        color:'red',
        fontStyle:'italic'
    },
    buttonView:{
        //height:100,
        justifyContent:'center',
        alignItems:'center',
        
        
        
    },
    button:{
        alignSelf:'center',
        backgroundColor:'#FF7F3F',
        width:Dimensions.get('window').width/2,
        justifyContent:'center',
        borderRadius:15,
        padding:8,
        shadowOffset:{width:1,height:10},
        shadowOpacity:0.4,
        shadowRadius:3,
        elevation:15,
        shadowColor:'#00acee'

    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    footer_container: {
        flexDirection: 'row',
        justifyContent:'center',
        padding:10,
       // margin:8
       
    },

})