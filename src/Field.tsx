import useField from "./useField";

interface FieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
}

const Field = (props: FieldProps) => {
  const { value, onChange } = useField(props.name);

  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Field;
