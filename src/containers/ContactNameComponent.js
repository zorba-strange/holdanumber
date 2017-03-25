const React                   = require('react');
const TextInputComponent      = require('./TextInputComponent');

const {
    View,
    Text,
    TextInput,
}                              = require('react-native');

const ContactNameComponent = () => {
    const regular_keyboard = 'default';
    return (
        <View
            style={{
                flex: 0,
                flexDirection: 'column',
            }}>
            <Text>
                Contact Name
            </Text>
            <TextInputComponent
                keyboard_type={regular_keyboard}/>
        </View>
    );
}


module.exports = ContactNameComponent;
