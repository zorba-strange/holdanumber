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
    textInputType,
    value,
    onChange,
    days_held_input,
}) => {
    return (
        <TextInput
            onChangeText={onChange}
            value={value}
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
// class TextInputComponent extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             switch_text_input_type: this.props.switch_text_input_type,
//         };
//     }
//     switch_text_input_type(textInputType) {
//         if(textInputType === 'days_held') {
//             return {
//                 value: days_held_input,
//                 call_back: gettingDaysHeldInput,
//             };
//         } else if (textInputType === 'phone_number') {
//             return {
//                 value: phone_number_input,
//                 call_back: gettingPhoneNumberInput,
//             };
//         } else if (textInputType === 'contact_name') {
//             return {
//                 value: contact_name_input,
//                 callback: gettingContactNameInput,
//             };
//         } else {
//             return 'text input type not found';
//         };
//     };

//     render(){
//         const {
//             keyboard_type,
//             maxLength,
//             textInputType,
//             value,
//             days_held_input,
//             switch_text_input_type,
//         } = this.props;
//         return (
//             <TextInput
//                 value={this.state.switch_text_input_type(textInputType).value}
//                 onChangeText={() => {
//                     const callBack = this.state.switch_text_input_type(value).call_back;
//                     console.log(value);
//                     callBack(value);
//                 }}
//                 maxLength={maxLength}
//                 keyboardType={keyboard_type}
//                 style={{
//                     borderWidth: 2,
//                     borderColor: 'blue',
//                     height: 50,
//                 }}
//             />
//         );
//     }
// };

// const mapStateToProps = (state) => {
//     console.warn(state);
//     return {
//         // days_held_input: state.getIn(['submittingReducer', 'days_held_input'], Immutable.fromJS({})),
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         gettingDaysHeldInput:bindActionCreators(gettingDaysHeldInput, dispatch),
//         gettingContactNameInput:bindActionCreators(gettingContactNameInput, dispatch),
//         gettingPhoneNumberInput:bindActionCreators(gettingPhoneNumberInput, dispatch),
//     };
// };


// module.exports = connect(mapStateToProps, mapDispatchToProps)(TextInputComponent);
