const React                   = require('react');

const {
    Button,
}                              = require('react-native');

const SaveContactButton = () => {
    return (
        <Button
            onPress={() => {
                console.log('button pressed');
            }}
            title="Hold"/>
    );
}


module.exports = SaveContactButton;
