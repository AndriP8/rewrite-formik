import useField from "./useField";

interface ErrorMessageProps {
  name: string;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  const { error } = useField(props.name);

  return error !== undefined ? <p>{error}</p> : null;
};

export default ErrorMessage;
