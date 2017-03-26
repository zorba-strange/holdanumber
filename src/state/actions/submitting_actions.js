const {
    SUBMITTING_CONTACT,
    GETTING_PHONE_NUMBER_INPUT,
    GETTING_CONTACT_NAME_INPUT,
    GETTING_DAYS_HELD_INPUT,
}                                                       = require('../../CONSTANTS/ACTION_TYPES');


const submittingContact = (contact) => {
    return {
        type: SUBMITTING_CONTACT,
        contact,
    };
};

const gettingContactNameInput = (contact_name_input) => {
    return {
        type: GETTING_CONTACT_NAME_INPUT,
        contact_name_input,
    };
};

const gettingPhoneNumberInput = (phone_number_input) => {
    return {
        type: GETTING_PHONE_NUMBER_INPUT,
        phone_number_input,
    };
};

const gettingDaysHeldInput = (days_held_input) => {
    return {
        type: GETTTING_DAYS_HELD_INPUT,
        days_held_input,
    };
};


module.exports = {
    submittingContact,
    gettingContactNameInput,
    gettingPhoneNumberInput,
    gettingDaysHeldInput,
};
