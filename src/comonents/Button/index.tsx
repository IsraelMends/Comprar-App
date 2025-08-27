import {TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

interface ButtonProps {
    style?: string
}

export function Button({style}: ButtonProps) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>Adicionar</Text>
        </TouchableOpacity>
    )
}