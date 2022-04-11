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
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="wrapper-input-field">
              <label htmlFor="email">Email addres</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className="wrapper-input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
