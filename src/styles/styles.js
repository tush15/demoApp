import { StyleSheet } from 'react-native';

import nl from './normalize';
import Texts from './texts';

const styles = StyleSheet.create({
    // All Texts
    ...Texts,
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: {
        paddingHorizontal: nl(20, 'width'),
        paddingVertical: nl(20, 'height'),
        flexGrow: 1,
        backgroundColor: '#F2F2F2'
    },
   
});

export default styles;
