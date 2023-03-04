import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const SignIn = ({navigation}) => {
    return (
        <View  style={styles.mainView}>
            <Text style={styles.textView}> SignInPage </Text>
            <Button
                title="Back"
                onPress={() => {navigation.navigate('HomeRoute')}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textView: {
        color: 'black',
    }
});

export default SignIn