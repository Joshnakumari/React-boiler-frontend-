import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
  };

  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <p>
        Please enter your credentials to sign in. This login form demonstrates how controlled
        components and state management work in React.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        In a real application, you'd connect this form to a backend authentication API and
        handle login tokens securely using context or local storage.
      </p>
    </div>
  );
};

export default Login;