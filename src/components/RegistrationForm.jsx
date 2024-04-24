import useRegistrationForm from "./useRegistrationForm";
import "./RegistrationForm.css";

import FirstNameInput from "./inputs/FirstNameInput";
import LastNameInput from "./inputs/LastNameInput";
import EmailInput from "./inputs/EmailInput";
import ContactInput from "./inputs/ContactInput";
import PasswordInput from "./inputs/PasswordInput";
import ConfirmPasswordInput from "./inputs/ConfirmPasswordInput";

const RegistrationForm = () => {
  const { formData, errors, handleChange, handleSubmit } =
    useRegistrationForm();

  return (
    <div className="registration-form-container">
      <h2 className="heading">Registration Form</h2>

      <FirstNameInput
        value={formData.firstName}
        onChange={handleChange}
        error={errors.firstName}
      />
      <LastNameInput
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
      />
      <EmailInput
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <ContactInput
        value={formData.contact}
        onChange={handleChange}
        error={errors.contact}
      />
      <PasswordInput
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <ConfirmPasswordInput
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default RegistrationForm;
