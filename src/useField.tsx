import { useFormikContext } from "./FormikContext";

const useField = (name: string) => {
  const formikContext = useFormikContext();

  const onChange = formikContext.handleChange;

  const value = formikContext.values[name];

  const error = formikContext.errors[name];

  const touched = formikContext.touches[name];

  return { value, error, onChange, touched };
};

export default useField;
