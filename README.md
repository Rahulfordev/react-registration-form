# User Registration Form

## Overview

This project implements a user registration form using React. The form includes fields for the user's first name, last name, email, contact number, password, and confirm password. It features form validation, form submission handling, and responsive design.

## Features

### 1. **Modular Components**:

- The project is structured using modular components, making the codebase organized and maintainable. Each input field has its own dedicated component for easy management and customization.

### 2. **Custom Hook for Form State and Validation**:

- The `useRegistrationForm` custom hook encapsulates form state management and validation logic. Leveraging React's `useState` hook, it efficiently handles form data and error tracking, ensuring a smooth user experience.

### 3. **Responsive Design**:

- The registration form is meticulously crafted to be fully responsive across all devices. Utilizing CSS media queries, the layout adapts seamlessly to various screen sizes, guaranteeing optimal user interaction.

### 4. **Clear Error Handling**:

- Error messages are intelligently integrated into the form, providing users with immediate feedback on input validation. This ensures a frictionless registration process by guiding users to rectify any errors efficiently.

## How It Works

1. **Form Rendering**: The `RegistrationForm` component renders the user registration form, utilizing input field components for each form field.
2. **State Management**: The `useRegistrationForm` custom hook manages the form state and validation. It handles user input changes, updates the form data state, and validates input fields based on predefined rules.
3. **Submission Handling**: Upon form submission, the `handleSubmit` function is triggered. It validates the form data and either logs the data to the console or displays error messages based on validation results.
4. **Responsive Design**: CSS media queries ensure the form adapts seamlessly to various screen sizes, providing a consistent user experience across devices.

## Why It's Unique

This project stands out for its seamless integration of modern design principles, robust functionality, and user-centric features:

- **Elegance and Visual Appeal**: The project prioritizes aesthetics, delivering a visually stunning registration form that captivates users with its sophistication.
- **Modularity and Scalability**: By leveraging modular components and custom hooks, the codebase remains highly maintainable and scalable, catering to future enhancements and modifications.
- **User-Focused Experience**: From responsive design to clear error handling, every aspect of the project is meticulously crafted to prioritize the user experience, ensuring ease of use and accessibility.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Rahulfordev/react-registration-form.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the application:

   ```
   npm run dev
   ```

4. Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.
