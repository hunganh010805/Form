import React, { useState } from 'react';

const ColorForm: React.FC = () => {
  const [color, setColor] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Hiển thị mã màu sắc
    alert(`Mã màu sắc: ${color}`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div className="container"> Bai2 
      <form onSubmit={handleSubmit} className="color-form">
        <input
          type="color"
          value={color}
          onChange={handleInputChange}
          className="color-input"
          title="Choose a color"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {/* Hiển thị màu sắc đã chọn */}
      {color && (
        <div style={{ marginTop: '10px' }}>
          Màu sắc đã chọn: <span style={{ color: color }}>{color}</span>
        </div>
      )}
    </div>
  );
};

export default ColorForm;
