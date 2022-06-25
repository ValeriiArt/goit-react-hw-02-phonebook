import React from "react";
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid'


const ContactItem = ( {name, number, contactId, deleteContact } ) => {
    return (
        <li >
            <p>{name}:</p>
            <p>{number}</p>
            <button
                type="button"
                onClick={() => deleteContact(contactId)}
            >
            Delete
            </button>
        </li>
    );
};

ContactItem.propTypes = {
    contactId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
}
export default ContactItem;