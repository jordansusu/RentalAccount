import React from 'react';
import { Text, SafeAreaView} from 'react-native';
import Btn from '../share/btn';
import InputField from '../share/inputField';
import themes from '../style/style';

const SignUp = ({navigation}) => {

    const confirmSignUp = () => {

    }

    const backToStart = () => {
        navigation.navigate('StartRoute');
    }

    return (
        <SafeAreaView style={themes.flex_center}>
            <Text style={themes.title_text}> Sign Up </Text>
            <InputField placeholderText="Enter user name" />
            <InputField placeholderText="Enter password" />
            <Btn 
                btnText="Confirm"
                pressFunction={confirmSignUp}
            />
            <Btn 
                btnText="Back"
                pressFunction={backToStart}
            />
        </SafeAreaView>
    )
}

export default SignUp