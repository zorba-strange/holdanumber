const React                   = require('react');
const {Component}             = require('react');
const {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    Keyboard,
    View,
}                              = require('react-native');


const TextInputComponent =({
    keyboard_type,
}) => {
    return (
        <TextInput
            keyboardType={keyboard_type}
            style={{
                borderWidth: 2,
                borderColor: 'blue',
                height: 50,
            }}
        />
    );
}


module.exports = TextInputComponent;
