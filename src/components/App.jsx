import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const contacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(contacts);
    
export default function App() {

  const [contacts, setContacts] = useState([] ?? parsedContacts);
  const [filter, setFilter] = useState('');

  const addContact = (text, number) => {

    const contact = {
      name: text,
      id: nanoid(),
      number,
    };

    if (contacts.find(contact => contact.name.toLowerCase() === text.toLowerCase())) {
      alert(`${contact.name} is already in contacts.`)
      
      return
    }
    setContacts((prev) => ([...prev, contact]));
  };

  const deleteContact = contactId => {
    setContacts((prev) => (prev.filter(contact => contact.id !== contactId)));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  
  const getVisibleContacts = () => {
    
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  useEffect(() => {
   
      setContacts(parsedContacts);

  }, []);
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);


    const visibleContacts = getVisibleContacts();

    return (
      <div className='container'>

        <h1 className='title-phonebook'>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      
        <h2 className='title-contacts'>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact} />
        
      </div>
    )
  }

  
//   addContact = (text, number) => {

//     const contact = {
//       name: text,
//       id: nanoid(),
//       number,
//     };

//     const { contacts } = this.state;
//     if (contacts.find(contact => contact.name.toLowerCase() === text.toLowerCase())) {
//       alert(`${contact.name} is already in contacts.`)
      
//       return
//     }
    
//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
    
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId)
//     }))
//   }

//    changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//    };
  
//     getVisibleContacts = () => {
//     const { filter, contacts} = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//     };
  
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//     }
//   }

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();
    
//     return (
//       <div className='container'>

//         <h1 className='title-phonebook'>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
      
//         <h2 className='title-contacts'>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContact} />
        
//         </div>
//   );
// }
// };

// export default App;
