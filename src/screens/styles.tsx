import { StyleSheet } from 'react-native';
import {NL} from '../styles';

const styles = StyleSheet.create({
    profileImage:{
        height:NL(30),
        width:NL(30),
        borderRadius:NL(15),
        marginRight:NL(10),
    },
    icon:{
        height:NL(20),
        width:NL(20),
        marginVertical:NL(5),
        marginHorizontal:NL(10),
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    postContainer:{
        width:'100%',
        paddingVertical:NL(15),
        shadowRadius:NL(5),
        shadowOpacity:NL(5),
        shadowColor:'black',
    },
    postImage:{
        height:NL(300),
        width:'100%',
    },
    info13Text:{
        fontSize: NL(13),
        fontWeight: '700',
        color: '#05161C'
    },
    info15Text:{
        fontSize: NL(15),
        fontWeight: '600',
        color: '#05161C'
    }
});

export default styles;