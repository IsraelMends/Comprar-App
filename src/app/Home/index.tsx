/* 
    @author: Israel de Oliveira Mendes
    @description: Tela inicial do app
    @date: 2025-08-29
*/

import { Image, View } from 'react-native';

import { Button } from '@/components/Button';

import {styles} from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/logo.png')} style={styles.logo} />

            <Button title='Adicionar' />
        </View>
    )
}