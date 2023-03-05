import { StyleSheet } from "react-native";

const themes = StyleSheet.create({
    // font Style
    title_text: {
        color: 'black',
        fontSize: 40,
    },


    // Button Style
    btn: {
        padding: 10,
        margin: 20,
        borderRadius: 10,
        backgroundColor: 'blue'
    },

    // Flex
    flex_center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    // Input
    text_input: {
        width: '70%',
        height: 40,
        margin: 10,
        borderColor: 'grey',
        borderRadius: 15,
        borderWidth: 2,
        padding: 10
    }
});

export default themes