import PropTypes from 'prop-types';

import styles from './Contact.module.css'
const Contact = ({ id, name, number, onDeleteContact }) => (
     
        <li>{name}: {number}
                 <button
                              type="button"
                              onClick={() => onDeleteContact(id)}
                              className={styles.button}
                        > Delete
                        </button>
        </li>
    
    );

Contact.propTypes = {
      
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
   