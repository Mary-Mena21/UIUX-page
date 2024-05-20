import Form from 'react-bootstrap/Form';

function Checkbox({ label, isChecked, onChange }) {
  return (
    <Form>
      <Form.Check // prettier-ignore
        // type="checkbox"
        type="switch"
        // id="custom-switch"
        label={label}
        checked={isChecked}
        onChange={onChange}
        style={{ color:'gray', marginTop: '10px',fontSize:'14px' }}
      />
    </Form>
  );
}

export default Checkbox;
