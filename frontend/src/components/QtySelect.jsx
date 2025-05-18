import { Form } from 'react-bootstrap';

const QtySelect = ({ changeHander, count, qty }) => {
  return (
    <Form.Control as='select' value={qty} onChange={changeHander}>
      {[...Array(count).keys()].map((i) => {
        const value = i + 1;
        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      })}
    </Form.Control>
  );
};
export default QtySelect;
