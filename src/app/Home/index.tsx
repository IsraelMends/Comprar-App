/* 
    @author: Israel de Oliveira Mendes
    @description: Tela inicial do app
    @date: 2025-08-29
*/

import { Image, View } from 'react-native';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import {Filter} from "@/components/Filter"

import {styles} from './styles';
import { FilterStatus } from '@/types/FilterStatus';

export function Home() {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/logo.png')} style={styles.logo} />

            <View style={styles.form}> 
                <Input placeholder='O que você precisa comprar ?' />
                <Button title='Adicionar' />
            </View>

            <View style={styles.content}>
                <Filter status={FilterStatus.DONE} isActive/>
                <Filter status={FilterStatus.PENDING} isActive={false}/>
            </View>
        </View>
    )
}