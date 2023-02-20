import React from 'react';
import useFormik, { UseFormikParam } from './useFormik';

interface ContextValues<T> {
  values: T;
  errors: Record<string, string>;
  touches: Record<string, boolean>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormikProps<T> extends UseFormikParam<T> {
  children:
    | React.ReactNode
    | ((formikContext: ContextValues<T>) => React.ReactNode);
}

export const FormikContext = React.createContext<ContextValues<any>>({
  values: {},
  errors: {},
  touches: {},
  handleChange: () => {},
  handleSubmit: () => {},
});

export const useFormikContext = () => React.useContext(FormikContext);

const Formik = <T extends {}>(props: FormikProps<T>) => {
  const formik = useFormik({
    initialValues: props.initialValues,
    onSubmit: props.onSubmit,
    validate: props.validate,
  });

  const renderChildren = () =>
    typeof props.children === 'function'
      ? props.children({ ...formik })
      : props.children;

  return (
    <FormikContext.Provider value={{ ...formik }}>
      {renderChildren()}
    </FormikContext.Provider>
  );
};

export default Formik;
