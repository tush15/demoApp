import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { Colors } from '../../constants';

import { NL } from '../../styles';

export default function RadioButton (props: any) {
    const { checked, onPress } = props;

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {checked && (
                <View style={styles.radioContainer}>
                    <View style={styles.blueCircle} />
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: NL(20, 'width'),
        width: NL(20, 'width'),
        borderRadius: NL(10, 'width'),
        backgroundColor: '#EDEEEE'
    },
    radioContainer: {
        height: NL(20, 'width'),
        width: NL(20, 'width'),
        borderRadius: NL(10, 'width'),
        backgroundColor: '#34A1C7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    blueCircle: {
        height: NL(13, 'width'),
        width: NL(13, 'width'),
        borderRadius: NL(6.5, 'width'),
        backgroundColor: '#34A1C7',
        borderWidth: NL(2, 'width'),
        borderColor: '#FFFFFF',
    }
});
