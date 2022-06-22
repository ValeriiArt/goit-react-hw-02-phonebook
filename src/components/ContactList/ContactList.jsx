import React from "react";
// import ContactItem from "components/ContactItem";
import s from './ContactList.module.css'


const ContactList = ( {contacts, deleteContact} ) => {
    return (
        <ul>
            {contacts.map(({id, name, number } ) => (
                // <ContactItem
                //     key={id}
                //     name={name}
                //     number={number}
                //     deleteContact={deleteContact}
                // />
                <li key={id}>
                    <p className={s.itemText}>{name}:</p>
                    <p className={s.itemText}>{number}</p>
                    <button
                        type="button"
                        onClick={() => deleteContact(id)}
                    >
                    Delete
                    </button>
                </li>
            ))}   
        </ul>
    )
};

export default ContactList;