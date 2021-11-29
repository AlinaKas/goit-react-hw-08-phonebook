import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const PreLoader = () => (
  <div>
    <Loader type="ThreeDots" color="#05a7ad" height={80} width={80} />
  </div>
);

export default PreLoader;
