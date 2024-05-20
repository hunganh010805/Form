import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('User:', user);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  return (
    <div className="container">Bai6
      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="nameInput">Tên:</label>
        <input
          type="text"
          id="nameInput"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          className="signup-input"
          required
        />
        <label htmlFor="emailInput">Email:</label>
        <input
          type="email"
          id="emailInput"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          className="signup-input"
          required
        />
        <label htmlFor="passwordInput">Mật khẩu:</label>
        <input
          type="password"
          id="passwordInput"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          className="signup-input"
          required
        />
        <label htmlFor="confirmPasswordInput">Nhập lại mật khẩu:</label>
        <input
          type="password"
          id="confirmPasswordInput"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleInputChange}
          className="signup-input"
          required
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
