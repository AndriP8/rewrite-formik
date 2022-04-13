import React from "react";
import { useFormikContext } from "./FormikContext";

const useField = (param: string) => {
  const formikContext = useFormikContext();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formikContext.handleChange(e);
  };

  const value = formikContext.values[param];

  const error = formikContext.errors[param];

  return { value, error, onChange };
};

export default useField;
