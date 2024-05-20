import React, { useState } from 'react';

const BirthdayForm: React.FC = () => {
  const [birthday, setBirthday] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Hiển thị giá trị ngày sinh
    alert(`Ngày sinh: ${birthday}`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(event.target.value);
  };

  return (
    <div className="container"> Bai3
      <form onSubmit={handleSubmit} className="birthday-form">
        <input
          type="date"
          value={birthday}
          onChange={handleInputChange}
          className="birthday-input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {/* Hiển thị giá trị ngày sinh */}
      {birthday && (
        <div style={{ marginTop: '10px' }}>
          Ngày sinh đã chọn: {birthday}
        </div>
      )}
    </div>
  );
};

export default BirthdayForm;
