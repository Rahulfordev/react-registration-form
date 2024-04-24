const FirstNameInput = ({ value, onChange, error }) => {
  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={value}
        onChange={onChange}
        placeholder="First Name"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default FirstNameInput;
