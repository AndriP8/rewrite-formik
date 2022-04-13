import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Validation form should be success", async () => {
  render(<App />);

  const accountValue = {
    email: "andri@gmail.com",
    password: "andri"
  };

  userEvent.type(
    screen.getByPlaceholderText(/enter your email/i),
    accountValue.email
  );
  userEvent.type(
    screen.getByPlaceholderText(/enter your password/i),
    accountValue.password
  );
  userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(window.alert(accountValue)).toBeTruthy();
});
