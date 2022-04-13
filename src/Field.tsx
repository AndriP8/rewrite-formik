import useField from "./useField";

interface FieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
}

const Field = (props: FieldProps) => {
  const { error, ...field } = useField(props.name);

  return <input {...props} {...field} />;
};

export default Field;
