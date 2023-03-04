import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const LogIn = ({navigation}) => {
    return (
        <View  style={styles.mainView}>
            <Text style={styles.textView}> LogInPage </Text>
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

export default LogIn