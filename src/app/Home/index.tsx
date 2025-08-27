import { Image, View } from 'react-native';

import { Button } from '@/comonents/Button';

import {styles} from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/logo.png')} style={styles.logo} />
            <Button/>
        </View>
    )
}