import { useFormikContext } from "./FormikContext";

const Form: React.FunctionComponent = ({ children }) => {
  const formikContext = useFormikContext();

  return <form onSubmit={formikContext.handleSubmit}>{children}</form>;
};

export default Form;
