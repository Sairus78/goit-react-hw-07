import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader/Loader';
import { useEffect } from 'react';
import { fetchContact } from './redux/contactsOps';

function App() {
  const { isLoading } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <div className="container phonebook-inner">
      <h1>Phonebook with Redux</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
}

export default App;
