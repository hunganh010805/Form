import React, { useState } from 'react';

const ProgressForm: React.FC = () => {
  const [progress, setProgress] = useState<number>(50);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Hiển thị giá trị tiến độ hoàn thành
    alert(`Tiến độ hoàn thành: ${progress}%`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseInt(event.target.value));
  };

  return (
    <div className="container">Bai4 
      <form onSubmit={handleSubmit} className="progress-form">
        <label htmlFor="progressInput">Tiến độ hoàn thành:</label>
        <input
          type="range"
          id="progressInput"
          value={progress}
          onChange={handleInputChange}
          min={0}
          max={100}
          step={1}
          className="progress-input"
        />
        <output htmlFor="progressInput">{progress}%</output>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {/* Hiển thị giá trị tiến độ hoàn thành */}
      {progress && (
        <div style={{ marginTop: '10px' }}>
          Tiến độ hoàn thành đã chọn: {progress}%
        </div>
      )}
    </div>
  );
};

export default ProgressForm;
