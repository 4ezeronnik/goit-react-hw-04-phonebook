import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';

const ContactList = ({ onDeleteContact, contacts }) => {
      return (<ul>
            {contacts.map(({ name, id, number }) => (
                  <Contact key={id} name={name} number={number} onDeleteContact={onDeleteContact} id={id}/>))}
      </ul>

      );
}

ContactList.propTypes = {
      contacts: PropTypes.arrayOf(
            PropTypes.shape(
                  {
                        name: PropTypes.string.isRequired,
                        id: PropTypes.string.isRequired,
                        number: PropTypes.string.isRequired,
                  }
            )
      ).isRequired,
      onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;