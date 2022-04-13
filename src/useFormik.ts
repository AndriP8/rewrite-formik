import React from "react";

type FormErrors = Record<string, string>;
type FormTouches = Record<string, boolean>;

export interface UseFormikParam<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
  validate: (values: T) => FormErrors;
}

const useFormik = <T extends {}>({
  initialValues,
  onSubmit,
  validate
}: UseFormikParam<T>) => {
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [values, setValues] = React.useState(initialValues);
  const [touches, setTouches] = React.useState<FormTouches>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setTouches({ ...touches, [e.target.name]: true });
  };

  React.useEffect(() => {
    const errorMessages = validate(values);
    setErrors(errorMessages);
  }, [validate, values]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = Object.keys(errors).length === 0;
    if (isFormValid) {
      onSubmit(values);
    }
  };

  return { values, errors, handleChange, handleSubmit, touches };
};

export default useFormik;
