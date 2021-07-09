import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import {
    BackSVG,
    BlackCrossSVG,
    CrossSVG,
    DownSVG,
    SearchSVG,
    UpSVG
} from '../../assets/svgs';

import { GStyles, NL } from '../../styles';

export default function Navbar(props: any) {
    const {
        leftIcon,
        leftOnPress,
        navbarTitle,
        modalTitle,
        rightIcon,
        rightOnPress,
        rightButton,
        paddingBottom
    } = props;

    let containerStyle = { ...styles.container };

    if (paddingBottom || paddingBottom === 0) {
        containerStyle.paddingBottom = paddingBottom;
    }

    const getImage = (imageName) => {
        switch (imageName) {
            case 'notication':
                return (
                    <Image
                        source={require('../../assets/images/navIcon.png')}
                        style={styles.navIcon}
                    />
                );
            case 'cross':
                return (
                    <Image
                        source={require('../../assets/images/notification.png')}
                        style={styles.navIcon}
                    />
                );
            default:
                return null;
        }
    };

    const renderIcon = (icon, _onPress) => (
        <TouchableOpacity onPress={_onPress}>
            {getImage(icon)}
        </TouchableOpacity>
    );

    return (
        <View style={containerStyle}>
            {leftIcon &&
                <View style={styles.leftIconContainer}>
                    {renderIcon(leftIcon, leftOnPress)}
                </View>
            }
                
            {navbarTitle && (
                <Text style={styles.headerText}>{navbarTitle}</Text>
            )}
               
            {modalTitle && (
                <Text style={styles.modalText}>{modalTitle}</Text>
            )}
                
            <View style={GStyles.dummy} />

            {rightIcon &&
                <View style={styles.rightIconContainer}>
                    {renderIcon(rightIcon, rightOnPress)}
                </View>
            }

            {rightButton && rightButton()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: NL(20, 'height')
    },
    headerText: {
        fontSize: NL(24, 'height'),
        color: '#182D47',
        fontFamily: 'AvenirLTStd-Black',
        marginRight: NL(12, 'width')
    },
    modalText: {
        ...GStyles.title20Text,
        marginRight: NL(12, 'width')
    },
    leftIconContainer: {
       marginRight: NL(12, 'width')
    },
    rightIconContainer: {
        marginLeft: NL(12, 'width')
    },
    navIcon:{
        height:NL(30),
        width:NL(30),
        marginHorizontal:NL(5),
        resizeMode:'contain'
    }
});
