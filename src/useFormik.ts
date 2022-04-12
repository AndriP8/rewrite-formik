import React from "react";

type FormErrors = Record<string, string>;

export interface UseFormikParam<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
  validate: (values: T) => FormErrors;
}

const useFormik = <T extends {}>(param: UseFormikParam<T>) => {
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [values, setValues] = React.useState(param.initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorMessages = param.validate(values);
    setErrors(errorMessages);

    const isFormValid = Object.keys(errorMessages).length === 0;
    if (isFormValid) {
      param.onSubmit(values);
    }
  };

  return { values, errors, handleChange, handleSubmit };
};

export default useFormik;
