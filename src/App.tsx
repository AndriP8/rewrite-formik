import ErrorMessage from './ErrorMessage';
import Field from './Field';
import Form from './Form';
import Formik from './FormikContext';

interface FormValues {
  email: string;
  password: string;
}

function App() {
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const validate = (values: FormValues) => {
    const errors: Record<string, string> = {};
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    const email = values.email.match(emailPattern) ?? '';

    if (values.email === '') {
      errors.email = 'Required';
    } else if (values.email !== email[0]) {
      errors.email = 'Invalid email address';
    }

    if (values.password === '') {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 or more character';
    }

    return errors;
  };

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validate={validate}
      >
        <Form>
          <div className="wrapper-input-field">
            <label htmlFor="email">Email addres</label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" />
          </div>
          <div className="wrapper-input-field">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
