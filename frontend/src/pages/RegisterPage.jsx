
import { useState, useContext } from "react";

import AuthLayout from "../components/auth/AuthLayout";
import FormInput from "../components/auth/FormInput";
import Button from "../components/ui/Button";
import { AuthContext } from "../context/AuthContext";

function RegisterPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const { registerUser } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Check whether both passwords match.
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      await registerUser({
        firstname,
        lastname,
        email,
        password
      });

      setSuccess("Account created successfully!");
    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Registration failed. Please try again."
      );

    } finally {
      setIsLoading(false);
    }
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
            label="First Name"
            type="text"
            value={firstname}
            onChange={setFirstname}
          />

          <FormInput
            label="Last Name"
            type="text"
            value={lastname}
            onChange={setLastname}
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

          {error && <p role="alert">{error}</p>}

          {success && <p role="status">{success}</p>}

          <Button type="submit" disable={isLoading}>
            {isLoading ? "Creating account..." : "Create Account"}
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
