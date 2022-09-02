import React, { useState } from 'react';
import ContactForm from "./Challenge_16/ContactForm";
import ContactList from "./Challenge_16/ContactList";

function Challenge_16() {
    const [contacts, setContacts] = useState([]);

    return (
        <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="">Challenge 16</h1>
            <br />
            <br />
            <div className='border p-20'>
                <ContactForm setContacts={setContacts} contacts={contacts} />
                <ContactList contacts={contacts} />
            </div>
            <br />
        </section>
    </div>
    );
}

export default Challenge_16