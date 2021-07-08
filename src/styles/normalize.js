import { Dimensions, PixelRatio } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
    Dimensions.get('window');

// based on iPhone 8's scale
const wscale = SCREEN_WIDTH / 360;
const hscale = SCREEN_HEIGHT / 760;

export default function normalize(size, based) {
    const newSize = based === 'height' ? size * hscale : size * wscale;

    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
