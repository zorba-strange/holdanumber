const React                   = require('react');
const Immutable                        = require('immutable');
const {connect}               = require('react-redux');
const TextInputComponent      = require('./TextInputComponent');
const {gettingContactNameInput}  = require('../state/actions/submitting_actions');
const {bindActionCreators}             = require('redux');
const {
    View,
    Text,
    TextInput,
}                              = require('react-native');

class ContactNameComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contact_name: 'Contact Name',
        };
    }
    render(){
        const {
            contact_name_input,
            gettingContactNameInput,
        } = this.props;

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
                onChange={(contact_name) => {
                    gettingContactNameInput(contact_name);
                }}
                placeholder={this.state.contact_name}
                value={contact_name_input}
                maxLength={maxLength}
                keyboard_type={regular_keyboard}/>
        </View>
    );
};
};


const mapStateToProps = (state) => {
    return {
        contact_name_input: state.submittingReducer.getIn(['contact_name_input']),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        gettingContactNameInput: bindActionCreators(gettingContactNameInput, dispatch),
    };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ContactNameComponent);
