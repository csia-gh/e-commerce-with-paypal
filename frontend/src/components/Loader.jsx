import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: '100px auto',
        display: 'block',
      }}
    />
  );
};
export default Loader;
