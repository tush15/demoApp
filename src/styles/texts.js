import nl from './normalize';

// { fontWeight: '100' }, // Thin
// { fontWeight: '200' }, // Ultra Light
// { fontWeight: '300' }, // Light
// { fontWeight: '400' }, // Regular
// { fontWeight: '500' }, // Medium
// { fontWeight: '600' }, // Semibold
// { fontWeight: '700' }, // Bold
// { fontWeight: '800' }, // Heavy
// { fontWeight: '900' }, // Black

const Texts = {
    normal10LightText: {
        fontSize: nl(10),
        color: '#848E8C',
        fontFamily: 'NunitoSans-Semibold'
    },
    normal14Text: {
        fontSize: nl(14),
        color: '#182843',
        fontFamily: 'NunitoSans-Semibold'
    },
    normal13Text: {
        fontSize: nl(13),
        color: '#848E8C',
        fontFamily: 'NunitoSans-Regular'
    },
    normal13RegularText: {
        fontSize: nl(13),
        color: '#05161C',
        fontFamily: 'NunitoSans-Semibold'
    },
    normal13DarkText: {
        fontSize: nl(13),
        fontFamily: 'NunitoSans-Bold',
        color: '#05161C'
    },
    normal12Text: {
        fontSize: nl(12),
        fontFamily: 'NunitoSans-Semibold'
    },
    normal12LightText: {
        fontSize: nl(12),
        fontFamily: 'NunitoSans-Regular',
        color: '#848E8C'
    },
    normalLight12Text: {
        fontSize: nl(12),
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#848E8C'
    },
    title32Text: {
        fontSize: nl(32),
        color: '#C1C6C5',
        fontFamily: 'AvenirLTStd-Heavy'
    },
    info20Text: {
        fontSize: nl(20),
        color: '#05161C',
        fontFamily: 'AvenirLTStd-Heavy'
    },
    info16LightText: {
        fontSize: nl(16),
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#848E8C'
    },
    info16Text: {
        fontSize: nl(16),
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#05161C'
    },
    title24Text: {
        fontSize: nl(24),
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#05161C'
    },
    info18Text: {
        fontSize: nl(18),
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#05161C'
    },
    info15Text: {
        fontSize: nl(15),
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#05161C'
    },
    info13BlueHeavyText: {
        fontSize: nl(13),
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#34A1C7'
    },
    info15BlueText: {
        fontSize: nl(15),
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#34A1C7'
    },
    info13MediumText: {
        fontSize: nl(13),
        fontFamily: 'AvenirLTStd-Medium',
        color: '#05161C'
    },
    info15MediumText: {
        fontSize: nl(15),
        fontFamily: 'AvenirLTStd-Medium',
        color: '#05161C'
    },
    info18MediumText: {
        fontSize: nl(18),
        fontFamily: 'AvenirLTStd-Medium',
        color: '#05161C'
    },
    info8MediumText: {
        fontSize: nl(8),
        fontFamily: 'AvenirLTStd-Medium',
        color: 'white'
    },
    info8HeavyText: {
        fontSize: nl(8),
        fontFamily: 'AvenirLTStd-Heavy',
        color: 'white'
    },
    info8BlackText: {
        fontSize: nl(8),
        fontFamily: 'AvenirLTStd-Black',
        color: 'white'
    },
    info15LightText: {
        fontSize: nl(15),
        fontFamily: 'AvenirLTStd-Book',
        color: '#848E8C'
    },
    info14Text: {
        fontSize: nl(14),
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#05161C'
    },
    info14BlueText: {
        fontSize: nl(14),
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#34A1C7'
    },
    info14Text900: {
        fontSize: nl(14),
        fontFamily: 'AvenirLTStd-Black',
        color: '#05161C'
    },
    info14RegularText: {
        fontSize: nl(14),
        fontFamily: 'AvenirLTStd-Book',
        color: '#05161C'
    },
    info14FaintText: {
        fontSize: nl(14),
        fontFamily: 'AvenirLTStd-Book',
        color: '#848E8C'
    },
    info14RedText: {
        fontSize: nl(14),
        fontFamily: 'AvenirLTStd-Black',
        fontWeight: '900',
        color: '#FF6A52',
        alignSelf: 'center'
    },
    info14LightText: {
        fontFamily: 'AvenirLTStd-Medium',
        fontSize: nl(14),
        color: '#05161C'
    },
    info14GreyText: {
        fontFamily: 'AvenirLTStd-Medium',
        fontSize: nl(14),
        color: '#C1C6C5'
    },
    info13Text: {
        fontSize: nl(13),
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#05161C'
    },
    info13LightText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: nl(13),
        fontWeight: '400',
        color: '#848E8C'
    },
    info12LightText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: nl(12),
        color: '#848E8C'
    },
    info13RegularText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: nl(13),
        fontWeight: '400',
        color: '#05161C'
    },
    info15RegularText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: nl(15),
        color: '#05161C'
    },
    info13BlueText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: nl(13),
        color: '#34A1C7'
    },
    info15BlueLightText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: nl(13),
        color: '#34A1C7'
    },
    info13GreyText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: nl(13),
        color: '#C1C6C5'
    },
    info10GreyText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: nl(13),
        color: '#C1C6C5'
    },
    info13DarkGreyText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: nl(13),
        color: '#848E8C'
    },
    info13WhiteText: {
        fontFamily: 'AvenirLTStd-Black',
        fontSize: nl(13),
        color: '#ffff'
    },
    info13900Text: {
        fontFamily: 'AvenirLTStd-Black',
        fontSize: nl(13),
        color: '#05161C'
    },
    info10RegularText: {
        fontFamily: 'AvenirLTStd-Black',
        fontSize: nl(10),
        color: '#05161C'
    },
    info10LightText: {
        fontFamily: 'AvenirLTStd-Book',
        fontSize: nl(10),
        color: '#05161C'
    },
    info10BlueText: {
        fontFamily: 'AvenirLTStd-Medium',
        fontSize: nl(10),
        color: '#34A1C7'
    },
    info9Text: {
        fontSize: nl(9),
        fontFamily: 'AvenirLTStd-Black',
        color: '#1C1C1C'
    },
    info12Text: {
        fontSize: nl(12),
        fontFamily: 'AvenirLTStd-Black',
        color: '#1C1C1C'
    },
    info9HeavyText: {
        fontSize: nl(9),
        fontFamily: 'AvenirLTStd-Heavy',
        color: '#848E8C'
    },
    info9LightText: {
        fontSize: nl(9),
        fontFamily: 'AvenirLTStd-Book',
        color: '#848E8C'
    },
    title21Text: {
        fontSize: nl(21),
        color: '#05161C',
        fontFamily: 'AvenirLTStd-Heavy'
    },
    title20Text: {
        fontSize: nl(20),
        color: '#05161C',
        fontFamily: 'AvenirLTStd-Black'
    },
    title16Text: {
        fontSize: nl(16),
        color: '#05161C',
        fontFamily: 'AvenirLTStd-Black'
    },
    smallTitle: {
        fontSize: nl(16),
        color: '#05161C',
        fontFamily: 'AvenirLTStd-Heavy'
    },
    small15Title: {
        fontSize: nl(15),
        color: '#05161C',
        fontFamily: 'AvenirLTStd-Heavy'
    }
};

export default Texts;
