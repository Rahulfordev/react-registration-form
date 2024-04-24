import React from "react";

const LastNameInput = ({ value, onChange, error }) => {
  return (
    <div>
      <input
        type="text"
        name="lastName"
        value={value}
        onChange={onChange}
        placeholder="Last Name"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default LastNameInput;
