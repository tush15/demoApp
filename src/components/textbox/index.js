import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';

import { NL } from '../../styles';

export default function Textbox(props: any) {
    const {
        height,
        width,
        textColor,
        backgroundColor,
        placeholderColor,
        value,
        placeholder,
        secureText,
        onChangeText,
        maxLength,
        keyboardType,
        editable,
        rightIcon,
        rightText,
        rightOnPress,
        styleTheme,
        autoCapitalize,
        marginBottom,
        errorMessage
    } = props;

    let textBoxStyle = { ...styles.box };
    let textInputStyle = { ...styles.textInputStyle };
    let placeholderStyle = { ...styles.placeholderStyle }

    // Check only when editable is false, if editable is undefined it is true
    if (editable === false && styleTheme !== 'white') {
        textBoxStyle = {...styles.disabledBox};
    };

    if (styleTheme === 'grey') {
        textBoxStyle = {...styles.disabledBox};
    }

    if (height) {
        textBoxStyle.height = height;
        textBoxStyle.borderRadius = NL(12, 'height');
        textBoxStyle.paddingVertical = NL(14, 'height');
        textBoxStyle.alignItems = 'flex-start';

        textInputStyle.alignSelf = 'flex-start';
        textInputStyle.fontSize = NL(14)
        textInputStyle.fontFamily = 'AvenirLTStd-Book';

        placeholderStyle.alignSelf = 'flex-start';
    }

    if (width) {
        textBoxStyle.width = width;
    }

    if (marginBottom && !errorMessage) {
        textBoxStyle.marginBottom = marginBottom;
    }

    if (textColor) {
        textInputStyle.color = textColor;
    }

    let currentPlaceholderColor = '#869D9C';
    if (placeholderColor) {
        currentPlaceholderColor = placeholderColor;
    }

    return (
        <>
            <View style={textBoxStyle}>
                <TextInput
                    style={value ? textInputStyle : placeholderStyle}
                    placeholder={placeholder}
                    placeholderTextColor={currentPlaceholderColor}
                    secureTextEntry={secureText}
                    onChangeText={onChangeText}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    value={value || null}
                    multiline={!!height}
                    editable={editable}
                    autoCapitalize={autoCapitalize}
                    backgroundColor={backgroundColor}
                />
               

                {rightText && (
                    <TouchableOpacity onPress={rightOnPress}>
                        <Text style={styles.rightTextStyle}>{rightText}</Text>
                    </TouchableOpacity>
                )}
            </View>
            {errorMessage &&
	            <Text style={styles.errorText}>
	                {errorMessage}
	            </Text>
	        }
        </>
    );
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: NL(10, 'height'),
        borderWidth: 1,
        borderColor: '#869D9C',
        paddingHorizontal: NL(16, 'width'),
        height: NL(40, 'width'),
        backgroundColor:'#0000',
        marginTop:NL(7),
        marginBottom:NL(15)
    },
    textInputStyle: {
        fontSize: NL(13, 'width'),
        fontFamily: 'AvenirLTStd-Book',
        color: '#05161C',
        alignSelf: 'center',
        flex: 1,
        padding: 1
    },
    placeholderStyle: {
        fontSize: NL(13, 'width'),
        fontFamily: 'AvenirLTStd-Book',
        color: '#869D9C',
        flex: 1,
        alignSelf: 'center',
        padding: 1,
    },
    rightTextStyle: {
        fontSize: NL(13, 'width'),
        fontFamily: 'AvenirLTStd-Medium',
        color: '#34A1C7',
        alignSelf: 'center',
        padding: 1
    },
    disabledBox: {
        backgroundColor: '#F6F6F6',
        borderRadius: NL(10, 'height'),
        height: NL(40, 'width'),
        paddingHorizontal: NL(16, 'width'),
        flexDirection: 'row',
        alignItems: 'center'
    },
    errorText:{
        fontSize: NL(13, 'width'),
        fontFamily: 'AvenirLTStd-Book',
        color: '#FF6A52',
        paddingTop: NL(12, 'height'),
        paddingBottom: NL(20, 'height')
    }
});
