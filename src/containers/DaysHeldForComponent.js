const React                   = require('react');
const Immutable                        = require('immutable');
const {connect}               = require('react-redux');
const TextInputComponent      = require('./TextInputComponent');
const {gettingDaysHeldInput}  = require('../state/actions/submitting_actions');
const {bindActionCreators}             = require('redux');

const {
    View,
    Text,
    TextInput,
}                              = require('react-native');

class DaysHeldForComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            days_held: 'Days',
        };
    }
    render(){
        const {
            days_held_input,
            gettingDaysHeldInput,
        } = this.props;
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
                    onChange={(days_held) => {
                        gettingDaysHeldInput(days_held);
                    }}
                    placeholder={this.state.days_held}
                    value={days_held_input}
                    maxLength={maxLength}
                    keyboard_type={numeric}/>
            </View>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        days_held_input: state.submittingReducer.getIn(['days_held_input']),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        gettingDaysHeldInput: bindActionCreators(gettingDaysHeldInput, dispatch),
    };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(DaysHeldForComponent);
