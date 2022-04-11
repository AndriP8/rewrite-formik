import { useFormikContext } from "./FormikContext";

interface FieldProps {
  id: string;
  name: string;
  type: string;
}

const Field = (props: FieldProps) => {
  const formikContext = useFormikContext();

  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      value={formikContext.values[props.name]}
      onChange={formikContext.handleChange}
    />
  );
};

export default Field;
