import React from 'react';

function Checkbox({ label, isChecked, onChange }) {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {label}
    </label>
  );
}

export default Checkbox;
