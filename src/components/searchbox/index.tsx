import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';

import { SearchSVG, ClearTextSVG } from '../../assets/svgs';

import { NL } from '../../styles';

export default function Textbox(props: any) {
    const {
        boxStyle,
        backgroundColor,
        height,
        width,
        textColor,
        placeholderColor,
        value,
        placeholder,
        onChangeText,
        editable,
        onFocus,
        onSubmitEditing,
        autoFocus,
        returnKeyType,
        onClearText
    } = props;

    const textBoxStyle = { ...styles.box, ...boxStyle };

    if (backgroundColor) {
        textBoxStyle.backgroundColor = backgroundColor;
    }

    if (width) {
        textBoxStyle.width = width;
    }

    const textInputStyle = { ...styles.textInputStyle };
    if (textColor) {
        textInputStyle.color = textColor;
    }

    let currentPlaceholderColor = '#869D9C';
    if (placeholderColor) {
        currentPlaceholderColor = placeholderColor;
    }

    return (
        <View style={textBoxStyle}>
            <SearchSVG 
                height={NL(14, 'width')} 
                width={NL(14, 'width')}
                style={{marginRight: NL(11, 'width')}}
            />
            <TextInput
                style={value ? textInputStyle : styles.placeholderStyle}
                placeholder={placeholder || 'Search'}
                placeholderTextColor={currentPlaceholderColor}
                onChangeText={onChangeText}
                value={value}
                editable={editable}
                onFocus={onFocus}
                onSubmitEditing={onSubmitEditing}
                autoFocus={autoFocus}
                returnKeyType={returnKeyType}
            />
            {!!value &&
                <TouchableOpacity onPress={() => onChangeText()}>
                    <ClearTextSVG
                        height={NL(16, 'width')} 
                        width={NL(16, 'width')}
                        style={{marginLeft: NL(11, 'width')}}
                        onPress={onClearText}
                    />
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: NL(20, 'height'),
        borderWidth: 1,
        borderColor: '#EDEEEE',
        paddingHorizontal: NL(16, 'width'),
        height: NL(40, 'height')
    },
    textInputStyle: {
        fontSize: NL(13, 'width'),
        fontFamily: 'AvenirLTStd-Medium',
        color: '#05161C',
        alignSelf: 'center',
        padding: 1,
        flex: 1
    },
    placeholderStyle: {
        fontSize: NL(14, 'width'),
        fontWeight: '400',
        color: '#848E8C',
        fontFamily: 'AvenirLTStd-Book',
        padding: 1,
        flex: 1,
        alignSelf: 'center'
    },
    rightTextStyle: {
        fontSize: NL(13, 'width'),
        fontFamily: 'AvenirLTStd-Medium',
        color: '#34A1C7',
        flex: 1,
        alignSelf: 'flex-start'
    }
});
