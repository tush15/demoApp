import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';

import { Navbar, BottomModal} from '../components';

import { HeartSVG ,RedHeartSVG } from '../assets/svgs';
import { GStyles, NL } from '../styles';
import styles from './styles';

const data = [
    {
        id:1,
        title:'Rahul Roy',
        profileImage:require('../assets/images/userImage.png'),
        image:require('../assets/images/mall.png'),
        location:'Delhi',
        comment:'visited mall'
    },
    {
        id:2,
        title:'Rahul Roy',
        profileImage:require('../assets/images/userImage.png'),
        status:'Cycling after so many days #feelinghappy',
        location:'Delhi',
    },
    {
        id:3,
        title:'Rahul Roy',
        profileImage:require('../assets/images/userImage.png'),
        image:require('../assets/images/mall.png'),
        location:'Delhi',
        comment:'visited mall'
    },
    {
        id:4,
        title:'Rahul Roy',
        profileImage:require('../assets/images/userImage.png'),
        image:require('../assets/images/mall.png'),
        location:'Delhi',
        comment:'visited mall'
    },
]

const notifications = [
    {
        id: 1,
        notification: 'Your order Trx-32572… has confirmed by the store',
        date: 'June 22, 2020 18:32',
        new: true
    },
    {
        id: 2,
        notification: 'Your order Trx-32572… has been completed',
        date: 'June 22, 2020 18:32',
        new: true
    },
    {
        id: 3,
        notification: 'You will be picking up order Trx-32572… in an hour',
        date: 'June 22, 2020 18:32',
        new: true
    },
    {
        id: 4,
        notification: 'Lorem ipsum dolor sit amet',
        date: 'June 22, 2020 18:32',
        new: false
    },
    {
        id: 5,
        notification: 'Your order Trx-32572… has confirmed by the store',
        date: 'June 22, 2020 18:32',
        new: false
    }
];

export default function Home (props) {

    const [likePost , setLikePost] = useState(false)
    const [modal , setModal] = useState(false)

    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)

    const renderNotifications = (item, idx) => {
        return (
            <TouchableOpacity style={{...styles.row,marginVertical:NL(5)}} key={idx}>
                <View>
                    {!item.new && (
                        <Image
                            source={require('../assets/images/notify2.png')}
                            style={styles.navIcon}
                        />
                    )}
                    {item.new && (
                        <Image
                            source={require('../assets/images/notify1.png')}
                            style={styles.navIcon}
                        />
                    )}
                </View>

                <View style={styles.textContainer}>
                    <Text style={{width:'80%'}}>
                        {item.notification}
                    </Text>
                    <Text style={styles.dateText}>{item.date}</Text>
                </View>

            </TouchableOpacity>
        );
    };

    const renderModal = () => {
        return(
            <>
                <Navbar
                    navbarTitle='Notifications'
                />

                {notifications.map((d,i) => renderNotifications(d,i))}
            </>
        )
    }


    const renderPost = (item,idx) => {
        return(
            <View
                key={idx}
                style={styles.postContainer}
            >
                <View style={{...styles.row,paddingHorizontal:NL(10)}}>
                    <Image
                        source={item.profileImage}
                        style={styles.profileImage}
                    />
                    <View>
                        <Text style={styles.info13Text}>{item.title}</Text>
                        <Text>{item.location}</Text>
                    </View>
                </View>
                {item.image &&
                    <Image
                        source={item.image}
                        style={styles.postImage}
                    />
                }
                {item.status &&
                    <View style={{paddingHorizontal:NL(20),marginVertical:NL(5)}}>
                        <Text style={styles.info15Text}>{item.status}</Text>
                    </View>
                }
                <>
                {likePost ?
                    <TouchableOpacity onPress={() => setLikePost(!likePost)}>
                        <Image
                            source={require('../assets/images/redHeart.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={(item) => setLikePost(!likePost)}>
                        <Image
                            source={require('../assets/images/heart.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                }
                </>
                {item.image &&
                    <Text style={{marginHorizontal:NL(20)}}><Text style={styles.info13Text}>{item.title}</Text> : {item.comment}</Text>
                }
            </View>
        )
    }
    
    // Main
    return (
        <ScrollView  style={GStyles.container}> 
            <View style={{...styles.row,paddingHorizontal:NL(20),justifyContent:'space-between',paddingTop:NL(20)}}>
                <Navbar
                    navbarTitle='MMEnterprise'
                    rightIcon='notification'
                    rightOnPress={openModal}
                />

                <TouchableOpacity
                    onPress={openModal}
                >
                    <Image
                        source={require('../assets/images/navIcon.png')}
                        style={styles.navIcon}
                    />
                </TouchableOpacity>
            </View>
            {data.map((d,i) => renderPost(d,i))}

            <BottomModal
                visible={modal}
                onRequestClose={closeModal}
                renderContent={renderModal}
            />
        </ScrollView>
    );
};

;
