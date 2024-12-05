import css from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className={css.loaderBlock}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="red"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
