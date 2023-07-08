import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex:1,
        borderWidth: 1,
       // borderBottomColor: '#FCF9BE',
        borderColor: 'white',
        backgroundColor: 'white',
        margin: 15,
        flexDirection: 'row',
       // borderRadius:50,
        //  borderBottomLeftRadius:50,
        // borderTopLeftRadius:50,
        // borderBottomRightRadius:15,
        // borderTopRightRadius:15,
        padding: 15,
        alignContent: 'space-around',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 15,
        shadowOffset: { width: 1, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
         elevation: 15,
       
        //shadowColor: '#00acee'
    },
    dayContainer: {
       // justifyContent: 'flex-end',
        borderWidth: 1,
        borderRadius: 15,
        padding: 17,
        backgroundColor: '#68B984',
        borderColor: '#68B984',
        flex:1


    },
    inner_container: {
        flex: 1,
        alignItems: 'center',
       // borderWidth: 1,
        //backgroundColor:'red'




    },
    info_container: {
        flex: 1,
        // flexDirection:"row",
      //  alignItems: 'center',
        padding: 10,
        // borderWidth:1,
       //  backgroundColor:'#FCF9BE',
        // borderColor:'#FCF9BE',
        // borderRadius:20

    },
    day: {
        fontSize: 15,
        fontWeight: 'bold',
       // alignItems: 'center',
        color: 'white',
        textAlign:'center'
    },
    nameText: {
        fontSize: 15,
        fontWeight: 'bold',
       // marginBottom: 5,
         color:'white',
         textAlign:'center',
       //  backgroundColor:'pink'
       // color: '#2B3A55',
       
    },
    dateText: {
        fontSize: 15,
         color:'#68B984',
        fontWeight: 'bold',
       // color: '#ffb74d'
    },
    description : {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:'left',
        flex:1,
        justifyContent:'center',
        //backgroundColor:'green'

        
    },
    footer:{
      alignItems: 'flex-end'
    },
    like_container:{
      flexDirection:'row',
      backgroundColor:'#68B984',
      padding:3,
      paddingHorizontal:10,
      borderRadius:20,
      alignItems:'center'
    },
    like_count_container:{
      backgroundColor: "#68B984",
      padding:3,
      borderRadius:20,
      marginRight:3
    },
    like_count_text:{
      color:'white',
      fontWeight:'bold'
    },
    like_text:{
      color:'white',
      fontWeight:'bold'
    }
})