import React from "react";
// import { nanoid } from 'nanoid'


const ContactItem = ( {id, name, number, deleteContact } ) => {
    return (
        <li key={id}>
            <p>{name}:</p>
            <p>{number}</p>
            <button
                type="button"
                onClick={() => deleteContact(id)}
            >
            Delete
            </button>
        </li>
    );
};


export default ContactItem;