import {TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

//Propriedade do buttom
type Props = {
    title: string
}

export function Button({title}: Props) {
    return (
        <TouchableOpacity onPress={() => {}} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}