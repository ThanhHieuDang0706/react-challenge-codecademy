import React, { useState } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [phone, setPhone]= useState('');

  const {contacts, addContact} = props;

  const checkContactNameDuplicate = (inputName) => {
    return contacts.some(contact => contact.name === inputName);
  };

  const isDuplicate = checkContactNameDuplicate(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if (isDuplicate) {
      addContact({name, email, phone});
      
      // clear input
      setName('');
      setEmail('');
      setPhone('');
    }


  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */


  return (
    <div>
      <section>
        <h2>
          <ContactForm
           name={name} 
           email={email} 
           phone={phone} 
           setName={setName}
           setEmail={ setEmail}
           setPhone={setPhone}
           handleSubmit={handleSubmit}
          />  
        </h2> 
      </section>
      <hr />

      <section>
        <h2><TileList contacts={contacts} /></h2>
      </section>
    </div>
  );
};
