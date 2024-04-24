const EmailInput = ({ value, onChange, error }) => {
  return (
    <div>
      <input
        type="email"
        name="email"
        value={value}
        onChange={onChange}
        placeholder="Email"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default EmailInput;
