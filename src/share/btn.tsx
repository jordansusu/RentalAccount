import React from 'react';
import { Pressable, Text } from 'react-native';
import themes from '../style/style';

const Btn = ({btnText, pressFunction, size='regular', color='light'}) => {
    return (
        <Pressable
            style={themes.btn}
            onPress={pressFunction}
        >
            <Text>{btnText}</Text>
        </Pressable>
    )
}

export default Btn