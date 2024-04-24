const ContactInput = ({ value, onChange, error }) => {
  return (
    <div>
      <input
        type="number"
        name="contact"
        value={value}
        onChange={onChange}
        placeholder="Contact"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default ContactInput;
