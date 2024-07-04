import { Button } from 'react-bootstrap';

const ButtonBlock = ({ children, ...attribs }) => {
  return (
    <div className='d-grid gap-2'>
      <Button {...attribs}>{children}</Button>
    </div>
  );
};
export default ButtonBlock;
