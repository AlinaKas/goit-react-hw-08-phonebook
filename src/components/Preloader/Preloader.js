import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Preloader.module.css';

const PreLoader = () => (
  <div className={s.wrapper}>
    <Loader type="ThreeDots" color="#fcfcfcc5" height={100} width={100} />
  </div>
);

export default PreLoader;
