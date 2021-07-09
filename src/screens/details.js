import React, { useState } from 'react';
import { View, Text, TouchableOpacity ,Image} from 'react-native';

import {Textbox,Navbar,Button} from '../components';
import {GStyles, NL} from '../styles';
import styles from './styles';

const options = [
    {
        id:1,
        title:'Settings',
        img:require('../assets/images/notification.png')
    },
    {
        id:1,
        title:'Settings',
        img:require('../assets/images/notification.png')
    },
    {
        id:1,
        title:'Settings',
        img:require('../assets/images/notification.png')
    },
    {
        id:1,
        title:'Settings',
        img:require('../assets/images/notification.png')
    },
]

export default function Details(props) {

    const renderOptions = (item, idx) =>{
        return(
            <TouchableOpacity
                key={idx}
                style={styles.optionContainer}
            >
                <Image
                    source={item.img}
                    style={styles.optionIcon}
                />
                <Text>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    
    // Main
    return (
        <View style={{padding:NL(20)}}>
            <Navbar
                navbarTitle='Account Details'
            />

            
            <TouchableOpacity
                style={styles.profileContainer}
            />
            <View style={{alignItems:'center'}}>
                <Text styles={styles.profileText}>Tushar Parit</Text>
                <Text styles={styles.profileText}>tushar@mailinator.com</Text>
            </View>


            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            {options.map((d,i) => renderOptions(d,i))}
            </View>

            <View style={{width:'50%',alignSelf:'center'}}>
                <Button
                    title='Log out'
                    buttonColor='#05161C'
                />
            </View>

        </View>
    );
};

;