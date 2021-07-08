import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet, View ,Image} from 'react-native';

import {
    HomeSVG,
    NotificationTabSVG,
    FavoriteSVG,
    HomeDarkSVG,
    NotificationTabDarkSVG,
    FavoriteDarkSVG,
} from '../assets/svgs';

import Home from '../screens/post';
import Details from '../screens/details';
import Upload from '../screens/upload';


import { NL } from '../styles';

const Tabs = createBottomTabNavigator();

export default function BottomTabs() {
    const getIcon = (label: string, focused: boolean) => {
        switch (label) {
            case 'Home':
                return focused ? require('../assets/images/darkHome.png') : require('../assets/images/home.png');
            case 'Details':
                return focused ? require('../assets/images/darkDetails.png') : require('../assets/images/details.png');
            case 'Upload':
                return focused ? require('../assets/images/post.png') : require('../assets/images/postLight.png');
        }
    };

    const tabBarIcon = (label: any, focused: boolean) => {
        const Icon = getIcon(label, focused);
        return (
            <View>
                
                <Image
                    source={Icon}
                    style={styles.icon}
                />
                <Text style={focused ? styles.lightText : styles.darkText}>
                    {label}
                </Text>
            </View>
        );
    };

    return (
        <Tabs.Navigator
            tabBarOptions={{
                showLabel: false,
                style: styles.container
            }}
        >
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => tabBarIcon('Home', focused)
                }}
            />

            <Tabs.Screen
                name="Upload"
                component={Upload}
                options={{
                    tabBarIcon: ({ focused }) => tabBarIcon('Upload', focused)
                }}
            />

            <Tabs.Screen
                name="Details"
                component={Details}
                options={{
                    tabBarIcon: ({ focused }) => tabBarIcon('Details', focused)
                }}
            />
        </Tabs.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        paddingTop: NL(12, 'width'),
        paddingBottom: NL(8),
        justifyContent: 'space-between'
    },
    darkText: {
        fontSize: NL(9, 'height'),
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#C1C6C5',
        marginTop: NL(7, 'height')
    },
    lightText: {
        fontSize: NL(9, 'height'),
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#133B32',
        marginTop: NL(7, 'height')
    },
    icon:{
        height:NL(20),
        width:NL(20),
        alignSelf:'center',
        margin:NL(5),
    }
});
