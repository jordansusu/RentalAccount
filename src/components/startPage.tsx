import React from 'react';
import { Text, SafeAreaView, Pressable } from 'react-native';
import Btn from '../share/btn';
import themes from '../style/style';

const Start = ({navigation}) => {

    const clickSignUp = () => {
        navigation.navigate('SignUpRoute');
    }

    const clickLogIn = () => {
        navigation.navigate('LogInRoute');
    }
    return (
        <SafeAreaView style={themes.flex_center}>
            <Text style={themes.title_text}> StartPage </Text>
            <Btn 
                btnText="Sign Up"
                pressFunction={clickSignUp}
            />
            <Btn 
                btnText="Log In"
                pressFunction={clickLogIn}
            />
        </SafeAreaView>
    )
}

export default Start