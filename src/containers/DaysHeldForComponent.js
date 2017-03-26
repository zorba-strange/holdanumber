const React                   = require('react');
const {connect}               = require('react-redux');
const TextInputComponent      = require('./TextInputComponent');
const {gettingDaysHeldInput}  = require('../state/actions/submitting_actions');

const {
    View,
    Text,
    TextInput,
}                              = require('react-native');

const DaysHeldForComponent = () => {
    const numeric = 'numeric';
    const maxLength = 2;
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
                maxLength={maxLength}
                keyboard_type={numeric}/>
        </View>
    );
}


module.exports = DaysHeldForComponent;
