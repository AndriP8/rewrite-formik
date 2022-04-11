import React from "react";

interface UseFormikParam<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
}

const useFormik = <T,>(param: UseFormikParam<T>) => {
  const [values, setValues] = React.useState(param.initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    param.onSubmit(values);
  };

  return { values, handleChange, handleSubmit };
};

export default useFormik;
