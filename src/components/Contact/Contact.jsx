import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.contactItem}>
        <p>
          <FaUser style={{ color: 'white' }} /> {name}
        </p>
        <p>
          <FaPhoneAlt style={{ color: 'white' }} /> {number}
        </p>
        <button
          className={css.contactButton}
          onClick={() => dispatch(deleteContact(id))}
        >
          ×
        </button>
      </div>
    </>
  );
}
