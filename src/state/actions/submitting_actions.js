const {
    SUBMITTING_CONTACT,
}                                                       = require('../../CONSTANTS/ACTION_TYPES');


const submittingContact = (contact) => {
    return {
        type: SUBMITTING_CONTACT,
        contact,
    };
};


module.exports = {
    submittingContact,
};
