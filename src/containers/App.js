const React                   = require('react');
const {Component}             = require('react');
const PhoneNumberComponent    = require('./PhoneNumberComponent');
const DaysHeldForComponent    = require('./DaysHeldForComponent');
const ContactNameComponent    = require('./ContactNameComponent');
const SaveContactButton       = require('../buttons/SaveContactButton');

const {
    View,
}                              = require('react-native');



class App extends Component {
  render() {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginTop: 20,
                borderWidth: 2,
                borderColor: 'pink',
            }}>
            <PhoneNumberComponent/>
            <DaysHeldForComponent/>
            <ContactNameComponent/>
            <SaveContactButton/>
        </View>
    );
  }
}


module.exports = App;
