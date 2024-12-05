import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.searchContainer}>
      <input
        className={css.searchInput}
        type="text"
        name="searchInput"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Find contacts by name"
      ></input>
    </div>
  );
};

export default SearchBox;
