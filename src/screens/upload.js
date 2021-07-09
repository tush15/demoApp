import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {Textbox,Navbar,Button} from '../components';
import {GStyles, NL} from '../styles';
import styles from './styles';

export default function Upload(props) {
    
    // Main
    return (
        <View style={{padding:NL(20)}}>
            <Navbar
                navbarTitle='Upload your Post'
            />

            <Text styles={styles.info15BoldText}>Photo</Text>
            <TouchableOpacity
                style={styles.imageContainer}
            />

            <Text styles={styles.info15BoldText}>Comment</Text>
            <Textbox
                placeholder='enter comment'
            />

            <Text styles={styles.info15BoldText}>Location</Text>
            <Textbox
                placeholder='enter location'
            />

            <View style={{flex:1}}/>

            <Button
                title='Upload'
                buttonColor='#05161C'
            />

        </View>
    );
};

;