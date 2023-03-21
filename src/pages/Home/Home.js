import React from 'react'
import { View, Text,ImageBackground} from 'react-native';
import Menu from '../../components/Menu/Menu';


const Home = () => {

    return (
        <View style={{
            flex: 1,
             backgroundColor:'white'
        }}>
            {/* <ImageBackground
                source={require('../../assets/images/pinkbackground.jpg')}
                style={{flex:1}}> */}
                <Menu title='Fatura Ekle' />
                <Menu title='Fiş Ekle' />
                <Menu title='İhtiyaçlar' />
                <Menu title='Borçlar' />
            {/* </ImageBackground> */}
        </View>
    )
}

export default Home;