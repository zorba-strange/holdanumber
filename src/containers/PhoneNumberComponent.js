const React                            = require('react');
const TextInputComponent               = require('./TextInputComponent');
const Immutable                        = require('immutable');
const {connect}                        = require('react-redux');
const {bindActionCreators}             = require('redux');
const {gettingPhoneNumberInput}        = require('../state/actions/submitting_actions');
const {
    View,
    Text,
    TextInput,
}                              = require('react-native');

class PhoneNumberComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            phone_number: 'Phone Number',
        };
    }

    render(){
        const phone_pad = 'phone-pad';
        const maxLength = 10;
        const {
            phone_number_input,
            gettingPhoneNumberInput,
        } = this.props;
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
                    onChange={(phone_number) => {
                        this.setState({phone_number});
                        gettingPhoneNumberInput(phone_number);
                    }}
                    maxLength={maxLength}
                    placeholder={this.state.phone_number}
                    value={phone_number_input}
                    keyboard_type={phone_pad}/>
            </View>
        );
    };
};

const mapStateToProps = (state) => {
    console.log('state', state.submittingReducer.getIn(['phone_number_input']));
    return {
        phone_number_input: state.submittingReducer.getIn(['phone_number_input']),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        gettingPhoneNumberInput: bindActionCreators(gettingPhoneNumberInput, dispatch),
    };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(PhoneNumberComponent);
