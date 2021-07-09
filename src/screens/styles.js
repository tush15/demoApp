import { StyleSheet } from 'react-native';
import {NL} from '../styles';

export default styles = StyleSheet.create({
    profileImage:{
        height:NL(30),
        width:NL(30),
        borderRadius:NL(15),
        marginHorizontal:NL(7),
    },
    icon:{
        height:NL(20),
        width:NL(20),
        marginVertical:NL(5),
        marginHorizontal:NL(15),
    },
    optionIcon:{
        height:NL(30),
        width:NL(30),
        marginVertical:NL(5),
        resizeMode:'contain'
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
    },
    info15BoldText:{
        fontSize: NL(15),
        fontWeight: '700',
        color: '#05161C',   
    },
    imageContainer:{
        height:NL(300),
        width:'100%',
        backgroundColor:'#869D9C',
        borderRadius:NL(20),
        marginTop:NL(7),
        marginBottom:NL(15),
    },
    profileContainer:{
        height:NL(100),
        width:NL(100),
        alignSelf:'center',
        backgroundColor:'#869D9C',
        borderRadius:NL(20),
        marginTop:NL(7),
        marginBottom:NL(15),
    },
    profileText:{
        fontSize: NL(15),
        fontWeight: '700',
        color: '#05161C', 
        textAlign:'center'
    },
    optionContainer:{
        width:'42%',
        alignItems:'center',
        backgroundColor:'#869D9C',
        borderRadius:NL(20),
        margin:NL(12),
        padding:NL(20),
    },
    navIcon:{
        height:NL(30),
        width:NL(30),
        marginHorizontal:NL(5),
        resizeMode:'contain'
    }
});

;