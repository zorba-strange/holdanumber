const React                   = require('react');
const Immutable               = require('immutable');
const {Component}             = require('react');
const {connect}               = require('react-redux');
const {bindActionCreators}    = require('redux');
const {
    gettingDaysHeldInput,
    gettingPhoneNumberInput,
    gettingContactNameInput,
}                             = require('../state/actions/submitting_actions');
const {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    Keyboard,
    View,
}                              = require('react-native');


const TextInputComponent = ({
    keyboard_type,
    maxLength,
    value,
    onChange,
    placeholder,
}) => {
    return (
        <TextInput
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            maxLength={maxLength}
            keyboardType={keyboard_type}
            style={{
                borderWidth: 2,
                borderColor: 'blue',
                height: 50,
            }}
        />
    );
};


module.exports = TextInputComponent;
