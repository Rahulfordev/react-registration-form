import { useState } from "react";

const useRegistrationForm = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateFormData(formData);
    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
      setFormData(initialFormData);
    } else {
      setErrors(newErrors);
    }
  };

  const validateFormData = (data) => {
    const errors = {};
    // Validate first name
    if (!data.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    // Validate last name
    if (!data.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    // Validate email
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    // Validate contact
    if (!data.contact.trim()) {
      errors.contact = "Contact is required";
    } else if (!/^\d{11}$/.test(data.contact)) {
      errors.contact = "Contact must be a 11-digit number";
    }
    // Validate password
    if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    // Validate confirm password
    if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  return { formData, errors, handleChange, handleSubmit };
};

export default useRegistrationForm;
