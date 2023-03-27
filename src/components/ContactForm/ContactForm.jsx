import React, { Component } from 'react';
import css from './ContactForm.module.css';

import Button from 'components/Button/Button';

class ContactForm extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  // handleInputChange = ({ target: { name, value } }) => {   // глибока диструктуризація
  //   this.setState({ [name]: value });
  // };
  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.createUser({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form
        className={css.form}
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <label className="label">
          <span className="label-text">Name</span>

          <input
            className={css.input}
            value={name}
            type="text"
            name="name"
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className="label">
          <span className="label-text">Number</span>

          <input
            className={css.input}
            value={number}
            type="tel"
            name="number"
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        {/* <Button type="submit">Add contact</Button> */}
        <Button />
      </form>
    );
  }
}

export default ContactForm;
