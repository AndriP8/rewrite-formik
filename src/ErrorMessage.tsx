import useField from "./useField";

interface ErrorMessageProps {
  name: string;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  const { error, touched } = useField(props.name);

  return touched && error !== undefined ? <p>{error}</p> : null;
};

export default ErrorMessage;
