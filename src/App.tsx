import Field from "./Field";
import Form from "./Form";
import Formik from "./FormikContext";

function App() {
  const initialValues = {
    email: "",
    password: ""
  };

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div className="wrapper-input-field">
            <label htmlFor="email">Email addres</label>
            <Field type="email" name="email" id="email" />
          </div>
          <div className="wrapper-input-field">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
