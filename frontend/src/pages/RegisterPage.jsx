
import { useState } from "react";

import AuthLayout from "../components/auth/AuthLayout";
import FormInput from "../components/auth/FormInput";
import Button from "../components/ui/Button";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  }

  return (
    <AuthLayout>
      <div>
        <h2 className="auth-title">Create Account</h2>

        <p className="auth-description">
          Join The Night Shelf and discover your next favorite book.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <FormInput
            label="Full Name"
            type="text"
            value={name}
            onChange={setName}
          />

          <FormInput
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
          />

          <FormInput
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />

          <Button type="submit">
            Create Account
          </Button>
        </form>

        <p className="auth-footer">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </AuthLayout>
  );
}

export default RegisterPage;
