const Immutable                        = require('immutable');
const createReducer                    = require('redux-immutablejs').createReducer;
const {
    SUBMITTING_CONTACT,
    GETTING_PHONE_NUMBER_INPUT,
    GETTING_CONTACT_NAME_INPUT,
    GETTING_DAYS_HELD_INPUT,
}                                      = require('../../CONSTANTS/ACTION_TYPES');


const initialState = Immutable.fromJS({});


const submittingReducer = createReducer(initialState, {
    [SUBMITTING_CONTACT]: (state, action) => {
        console.log('submitting reducer');
        return;
    },

    [GETTING_PHONE_NUMBER_INPUT]: (state, action) => {
        console.log('getting phone number input', action.phone_number_input);
        return state.setIn(['phone_number_input'], action.phone_number_input);
    },

    [GETTING_CONTACT_NAME_INPUT]: (state, action) => {
        console.log('getting contact name input', action.contact_name_input);
        return state.setIn(['contact_name_input'], action.contact_name_input);
    },

    [GETTING_DAYS_HELD_INPUT]: (state, action) => {
        console.log('getting days held input', action.days_held_input);
        return state.setIn(['days_held_input'], action.days_held_input);
    },
});


module.exports = submittingReducer;
