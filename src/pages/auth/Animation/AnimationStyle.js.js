import { StyleSheet, Dimensions } from "react-native"

const {height, width} = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
       backgroundColor:"#f9fbe7"
    },

    button:{
      backgroundColor:"#68B984",
      height:55,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:35,
      marginHorizontal:20,
      marginVertical:10,
      borderWidth:1,
      borderColor:"white"
    },

    buttonText:{
      color:"white",
      fontSize:20,
      fontWeight:"600",
      letterSpacing:0.5
    },

    bottomContainer:{
      justifyContent:"flex-end",
      height:height/1.5,
      
    },

    textInput:{
      height:45,
      borderWidth:1,
      borderColor:"rgba(0,0,0,0.2)",
      marginHorizontal:20,
      marginVertical:5,
      borderRadius:25,
      paddingLeft:15,
    
    },

    formButton:{
      backgroundColor:"#68B984",
      height:55,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:35,
      marginHorizontal:20,
      marginVertical:10,
      borderWidth:1,
      borderColor:"white",
      shadowColor:"#000",
      shadowOffset:{
        width:0,
        height:4
      },
      shadowOpacity:24,
      shadowRadius:3.84,
      elevation:5,

    },

    formInputContainer:{
      //yukarıda kalan login register butonları hizzalandı
      ...StyleSheet.absoluteFill,
      //butonşar altta form üstte olduğu için butonlara basılmıyordu. 
      zIndex:-1,
      justifyContent:"center",
      alignSelf:"center"
     
    },

    closeButtonContainer:{
      height:40,
      width:40,
      justifyContent:"center",
      shadowColor:"#000",
      alignSelf:"center",
      shadowOffset:{
        width:0,
        height:5,
      },
      shadowOpacity:0.34,
      shadowRadius:6.27,
      elevation:1,
      backgroundColor:"#f9fbe7",
      alignItems:"center",
      borderRadius:20,
      top:-20
    },

    // focusInput:{
    //   borderColor:"#CCD6A6",
    //   height:45,
    //   borderWidth:1,
    //   marginHorizontal:20,
    //   marginVertical:5,
    //   borderRadius:25,
    //   paddingLeft:15,
    //   tintColor:"#CCD6A6"
    // },

    text:{
     
      //marginTop:150,
      //margin:80,
      //padding:5,
      color:"#FF7F3F",
      fontFamily: 'Georgia', 
      fontSize: 50,
      fontStyle: 'italic',
      fontWeight:"bold",
      
    }
})

export default styles;