const PasswordInput = ({ value, onChange, error }) => {
  return (
    <div>
      <input
        type="password"
        name="password"
        value={value}
        onChange={onChange}
        placeholder="Password"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default PasswordInput;
