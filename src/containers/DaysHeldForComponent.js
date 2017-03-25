const React                   = require('react');
const TextInputComponent      = require('./TextInputComponent');

const {
    View,
    Text,
    TextInput,
}                              = require('react-native');

const DaysHeldForComponent = () => {
    const numeric = 'numeric';
    return (
        <View
            style={{
                flex: 0,
                flexDirection: 'column',
            }}>
            <Text>
                Hold For
            </Text>
            <TextInputComponent
                keyboard_type={numeric}/>
        </View>
    );
}


module.exports = DaysHeldForComponent;
