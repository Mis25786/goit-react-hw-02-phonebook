import React from 'react';
import css from './Filter.module.css';

const Filter = () => {
  return (
    <div className={css.filter}>
      <span className="filter-text">Find contacts by name</span>

      <input
        className={css.input}
        type="text"
        name="name"
        // value={filter}
        //   onChange={}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

export default Filter;
