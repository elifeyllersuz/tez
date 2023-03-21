import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        borderWidth: 1,
       // borderBottomColor: '#FCF9BE',
        borderColor: 'white',
        backgroundColor: 'white',
        margin: 15,
        flexDirection: 'row',
         borderBottomLeftRadius:50,
        borderTopLeftRadius:50,
        borderBottomRightRadius:15,
        borderTopRightRadius:15,
        padding: 15,
        alignContent: 'space-around',
        justifyContent: 'flex-end',
        alignItems: 'center',
        //borderRadius: 15,
        shadowOffset: { width: 1, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
         elevation: 15,
        //shadowColor: '#00acee'
    },
    priceContainer: {
        justifyContent: 'flex-end',
        borderWidth: 1,
        borderRadius: 30,
        padding: 17,
        backgroundColor: '#68B984',
        borderColor: '#68B984',


    },
    inner_container: {
        flex: 1,
        alignItems: 'flex-end',




    },
    info_container: {
        flex: 1,
        // flexDirection:"row",
        alignItems: 'center',
        padding: 10,
        // borderWidth:1,
        // backgroundColor:'#FCF9BE',
        // borderColor:'#FCF9BE',
        // borderRadius:20

    },
    priceText: {
        fontSize: 15,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'white'
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
         color:'#68B984'
       // color: '#2B3A55'
    },
    dateText: {
        fontSize: 15,
         color:'#68B984',
        fontWeight: 'bold',
       // color: '#ffb74d'
    }
})