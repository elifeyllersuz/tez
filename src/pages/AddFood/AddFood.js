import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import Input from '../../components/Input/Input';
import Icon from "react-native-vector-icons/MaterialIcons"
import Button from '../../components/Button/Button';
import Modal from 'react-native-modal';

const deviceSize = Dimensions.get('window');

const AddFood = ({ visible, onClose, onSend }) => {

    const [text, setText] = React.useState(null);
    const [username, setUsername] = React.useState(null);
    const [day, setDay] = React.useState(null);

    function handleSend() {
        if (!text) {
            return;
        }
        onSend(text,username,day);
        setText(null);

    }

    return (
        <Modal style={styles.modal}
            isVisible={visible}
            swipeDirection="down"
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}>
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput
                        placeholder='Ne yemek yapalım?' onChangeText={setText}

                        multiline />
                    <TextInput
                        placeholder='Kim Yapacak?' onChangeText={setUsername}

                    />

                    <TextInput
                        placeholder='Hangi gün?' onChangeText={setDay}

                    />
                </View>

                <Button text='Gönder' onPress={handleSend} />
            </View>
        </Modal>
    )
}

export default AddFood;

const styles = StyleSheet.create({
    container: {
        // flex:1,
        backgroundColor: 'white',
        marginHorizontal: 10,
        padding: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: deviceSize.height / 3

    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0
    },
    input_container: {
        flex: 1
    }

})