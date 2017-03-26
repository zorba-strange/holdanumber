const React                   = require('react');
const TextInputComponent      = require('./TextInputComponent');

const {
    View,
    Text,
    TextInput,
}                              = require('react-native');

const ContactNameComponent = () => {
    const regular_keyboard = 'default';
    const maxLength = 30;
    return (
        <View
            style={{
                flex: 0,
                flexDirection: 'column',
            }}>
            <Text>
                Contact Name (if left blank, today's date will be used);
            </Text>
            <TextInputComponent
                maxLength={maxLength}
                keyboard_type={regular_keyboard}/>
        </View>
    );
}


module.exports = ContactNameComponent;
