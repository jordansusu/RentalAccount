import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View  style={styles.mainView}>
            <Text style={styles.textView}> HomePage </Text>
            <Button
                title="Sign In"
                onPress={() => {navigation.navigate('SignInRoute')}}
            />
            <Button
                title="Log In"
                onPress={() => {navigation.navigate('LogInRoute')}}
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

export default Home