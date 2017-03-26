const Immutable                        = require('immutable');
const createReducer                    = require('redux-immutablejs').createReducer;
const {
    SUBMITTING_CONTACT,
}                                      = require('../../CONSTANTS/ACTION_TYPES');


const initialState = Immutable.fromJS({});


const submittingReducer = createReducer(initialState, {
    [SUBMITTING_CONTACT]: (state, action) => {
        console.log('submitting reducer');
        return;
    },
});


module.exports = submittingReducer;
