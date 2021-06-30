import { useState } from "react";

const useForm = (callback, validate) => {
  const INITIAL_STATE = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    message: "",
  };

  const [formValues, setFormValues] = useState({ ...INITIAL_STATE });
  const [errors, setErrors] = useState({ ...INITIAL_STATE });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setErrors(validate(formValues));
    callback();
  };

  return {
    handleChange,
    handleSubmit,
    formValues,
    errors,
  };
};

export default useForm;
