import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { Colors } from '../styles/colors';

export default function MenuModal({show,text,textBTN,actionBTN}:any): JSX.Element {
    const [modalVisible, setModalVisible] = useState(false);

    React.useEffect(() =>{
        setModalVisible(show)
    },[show])


    return (
        <View style={styles.centeredView}>
          <Modal animationType="none" transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{text}</Text>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={actionBTN}>
                    <Text style={styles.textStyle}>{textBTN.toUpperCase()}</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      );


}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: Colors.primary,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 10,
      textAlign: 'center',
    },
  });