import React from 'react'
import { TouchableOpacity,Text,Image } from 'react-native';
import styles from './SocailChoiceStyle';


const SocialChoice = ({image}) => {

    return (
        <TouchableOpacity onPress={() => {}}
        style={styles.container}>
          <Image source={image}
          style={styles.image}/>

        </TouchableOpacity>
    )
}

export default SocialChoice;