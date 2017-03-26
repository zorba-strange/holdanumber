const React                   = require('react');
const {
    createStore,
    combineReducers,
}                             = require('redux');
import {Provider}             from 'react-redux';
const {submittingReducer}    = require('./state/reducers/all_reducers');
import App                    from './containers/App';
const {
    View,
}                              = require('react-native');

const reducers = combineReducers({submittingReducer});
const store = createStore(reducers);

const entry_point = () => {
    return (
        <Provider
            store={store}>
            <App />
        </Provider>
    );
};


module.exports = entry_point;
