import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css'

export default function ContactForm({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const targetName = e.target.name;

    switch (targetName) {
      case "name":
        return setName(e.target.value);
      case "number":
        return setNumber(e.target.value);
      default:
        return
    }
  };
  
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number)

    setName('');
    setNumber('');
  
  };

   return (
           <form onSubmit={handleSubmit} className={styles.container}>
      <label className={styles.labelName}>
        Name
    <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
               onChange={handleChange}
               className={styles.inputName}
        />
          </label>
  
          <label className={styles.labelNumber}>
            Number
            <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
               onChange={handleChange}
                className={styles.inputNumber}
/>
          </label>

           <button type="submit"
             className={styles.button}
          >Add contact</button>
        </form> 
        )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}


// class ContactForm extends Component {
//     state = {
//        name: '',
//        number: ''
//     };
  
//   static propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }
    
//      handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//      };
    
//     handleSubmit = e => {
//     const { name, number } = this.state;
//     e.preventDefault();

//       this.props.onSubmit(name, number);
      
       
//     this.setState({
//       name: '',
//       number: ''
//     })
//   };

//     render() {
//         const { name, number } = this.state;
//        return (
//            <form onSubmit={this.handleSubmit} className={styles.container}>
//       <label className={styles.labelName}>
//         Name
//     <input
//   type="text"
//   name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={name}
//                onChange={this.handleChange}
//                className={styles.inputName}
//         />
//           </label>
  
//           <label className={styles.labelNumber}>
//             Number
//             <input
//   type="tel"
//   name="number"
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               value={number}
//                onChange={this.handleChange}
//                 className={styles.inputNumber}
// />
//           </label>

//            <button type="submit"
//              className={styles.button}
//           >Add contact</button>
//         </form> 
//         )
//     }
// }

// export default ContactForm;

