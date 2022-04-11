import React from "react";

function App() {
  const [values, setValues] = React.useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="wrapper-input-field">
          <label htmlFor="email">Email addres</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="wrapper-input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
