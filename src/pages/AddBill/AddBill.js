import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import Input from '../../components/Input/Input';
import Icon from "react-native-vector-icons/MaterialIcons"
import Button from '../../components/Button/Button';
import Modal from 'react-native-modal';

const deviceSize = Dimensions.get('window');

const AddBill = ({ visible, onClose, onSend }) => {

    const [text, setText] = React.useState(null);
    const [username, setUsername] = React.useState(null);
    const [description, setDescription] = React.useState(null);

    function handleSend() {
        if (!text) {
            return;
        }
        onSend(text, username,description);
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
                        placeholder='Fatura tutarı giriniz...' onChangeText={setText}

                        multiline />
                    <TextInput
                        placeholder='Kim Aldı?' onChangeText={setUsername}

                    />

                    <TextInput
                        placeholder='Açıklama Giriniz...' onChangeText={setDescription}

                    />
                </View>

                <Button text='Gönder' onPress={handleSend} />
            </View>
        </Modal>
    )
}

export default AddBill;

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