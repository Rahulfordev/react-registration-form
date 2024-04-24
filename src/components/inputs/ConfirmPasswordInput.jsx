const ConfirmPasswordInput = ({ value, onChange, error }) => {
  return (
    <div>
      <input
        type="password"
        name="confirmPassword"
        value={value}
        onChange={onChange}
        placeholder="Confirm Password"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default ConfirmPasswordInput;
