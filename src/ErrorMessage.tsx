import { useFormikContext } from "./FormikContext";

interface ErrorMessageProps {
  name: string;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  const formikContext = useFormikContext();
  const errorMessage = formikContext.errors[props.name];

  return errorMessage !== undefined ? <p>{errorMessage}</p> : null;
};

export default ErrorMessage;
