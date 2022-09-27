import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
    <label>
        Find contacts by name
        <input
            type="text"
            value={value}
            onChange={onChange}
            className={styles.inputName}/>
        
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter;