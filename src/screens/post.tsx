import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';

import { Navbar} from '../components';

import { HeartSVG ,RedHeartSVG } from '../assets/svgs';
import { GStyles, NL } from '../styles';
import styles from './styles';

interface Props {
    navigation: any;
}

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

const Home: React.FC<Props> = (props) => {

    const [likePost , setLikePost] = useState(false)

    const renderPost = (item:any,idx:number) => {
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
                    <Text><Text style={styles.info13Text}>{item.title}</Text> : {item.comment}</Text>
                }
            </View>
        )
    }
    
    // Main
    return (
        <ScrollView  style={GStyles.container}> 
            <View style={{paddingHorizontal:NL(20)}}>
                <Navbar
                    navbarTitle='MMEnterprise'
                />
            </View>
            {data.map((d,i) => renderPost(d,i))}
        </ScrollView>
    );
};

export default Home;
