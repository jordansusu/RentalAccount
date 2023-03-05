import React from 'react';
import { TextInput } from 'react-native';
import themes from '../style/style';

const InputField = ({placeholderText, size='regular'}) => {
    return (
        <TextInput
            style={themes.text_input}
            placeholder={placeholderText}
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
        >
        </TextInput>
    )
}

export default InputField