import React, { useState } from 'react';

const BasicForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Email submitted:', email);
    // Xử lý dữ liệu ở đây, ví dụ: gửi dữ liệu đến server
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="container"> Bai1
      <form onSubmit={handleSubmit} className="email-form">
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          className="email-input"
          placeholder="Enter your email"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default BasicForm;
