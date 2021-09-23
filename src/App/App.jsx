import PropTypes from "prop-types";
import React from "react";
import ContactForm from "../components/ContactForm";
import ContactsList from "../components/ContactsList/ContactsList";
import Filter from "../components/Filter";

const App = ({ contacts, removeContact, filter }) => {
  const getFilteredContacts = () => {
    const normalFilterValue = filter.toLocaleLowerCase().trim();

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalFilterValue)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList
        contacts={filteredContacts}
        deleteContactsButton={removeContact}
      />
    </div>
  );
};

App.propType = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default App;
