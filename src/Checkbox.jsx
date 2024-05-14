import Form from 'react-bootstrap/Form';

function Checkbox({ label, isChecked, onChange }) {
  return (
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label={label}
        checked={isChecked}
        onChange={onChange}
      />
    </Form>
  );
}

export default Checkbox;
