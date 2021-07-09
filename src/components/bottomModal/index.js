import React from 'react';
import {
  View, 
  Text, 
  Modal, 
  Image, 
  TouchableOpacity,
  TouchableWithoutFeedback, 
  StyleSheet
} from 'react-native';


import { GStyles, NL } from '../../styles';

export default function BottomModal (props: any) {
    const { visible, onRequestClose, renderContent } = props;

    return (
        <Modal
            visible={props.visible}
            onRequestClose={props.onRequestClose}
            transparent
        >
            <TouchableWithoutFeedback onPress={props.onRequestClose}>
                <View style={styles.dummyContainer} />
            </TouchableWithoutFeedback>
            
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {props.renderContent()}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    dummyContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        flex: 1
    },
    modalContent: {
        paddingHorizontal: NL(20, 'width'),
        paddingTop: NL(20, 'height'),
        paddingBottom: NL(20, 'height') ,
        backgroundColor: '#fff',
        borderTopEndRadius: NL(20, 'height'),
        borderTopStartRadius: NL(20, 'height'),
        marginTop: NL(40, 'height'),
        flex: 0
    }
});
