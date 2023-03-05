import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import themes from '../style/style';
import InputField from '../share/inputField';
import Btn from '../share/btn';

const LogIn = ({navigation}) => {

    const backToStart = () => {
        navigation.navigate('StartRoute');
    }

    return (
        <SafeAreaView  style={themes.flex_center}>
            <Text style={themes.title_text}> Log In </Text>
            <InputField placeholderText="Enter user name" />
            <InputField placeholderText="Enter password" />
            <Btn 
                btnText="Back"
                pressFunction={backToStart}
            />
        </SafeAreaView>
    )
}

export default LogIn