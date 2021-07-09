import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

import { GStyles, NL } from '../../styles';

export default function Button(props: any) {
    const {
        height,
        width,
        titleFontSize,
        onPress,
        disabled,
        title,
        buttonColor,
        textColor,
        icon,
        loading
    } = props;

    const buttonStyle = { ...styles.buttonContainer };

    if (height) {
        buttonStyle.height = height;
    }

    if (width) {
        buttonStyle.width = width;
    }

    if (buttonColor) {
        buttonStyle.backgroundColor = buttonColor;
    }

    const textStyle = { ...styles.textStyle };

    if (textColor) {
        textStyle.color = textColor;
    }

    if (titleFontSize) {
        textStyle.fontSize = props.titleFontSize;
    }

    if (disabled) {
        buttonStyle.backgroundColor = '#C1C6C5';
        textStyle.color = '#848E8C';
    }


    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
            disabled={disabled}
        >
            {!loading && <View style={GStyles.row}>
                <Text style={textStyle}>{title}</Text>
                
            </View>}
            {loading && 
                <ActivityIndicator 
                    size='small' 
                    color={textColor || 'white'} 
                />
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: NL(44, 'height'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: NL(23, 'height'),
        backgroundColor: '#34A1C7'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: NL(15, 'width'),
        fontFamily: 'AvenirLTStd-Heavy',
        color: 'white'
    },
    dummy: {
        flex: 1
    }
});
