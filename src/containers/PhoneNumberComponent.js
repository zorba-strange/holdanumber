const React                   = require('react');
const TextInputComponent      = require('./TextInputComponent');

const {
    View,
    Text,
    TextInput,
}                              = require('react-native');

const PhoneNumberComponent = () => {
    const phone_pad = 'phone-pad';
    return (
        <View
            style={{
                flex: 0,
                flexDirection: 'column',
            }}>
            <Text>
                Phone Number
            </Text>
            <TextInputComponent
                keyboard_type={phone_pad}/>
        </View>
    );
}


module.exports = PhoneNumberComponent;
