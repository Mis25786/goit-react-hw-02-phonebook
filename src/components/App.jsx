import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from '../components/ContactList/ContactList';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    // name: '',
    // number: '',
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log('newUser :>> ', newUser);
  };

  render() {
    return (
      <>
        <div className={css.phonebook}>
          <h1>Phonebook</h1>
          <ContactForm createUser={this.createUser} />

          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </>
    );
  }
}
