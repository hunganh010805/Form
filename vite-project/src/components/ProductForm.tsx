import React, { useState } from 'react';

interface Product {
  code: string;
  name: string;
  price: number;
  quantity: number;
}

const ProductForm: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    code: '',
    name: '',
    price: 0,
    quantity: 0
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Product:', product);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: name === 'price' || name === 'quantity' ? parseFloat(value) : value
    });
  };

  return (
    <div className="container"> Bai5
      <form onSubmit={handleSubmit} className="product-form">
        <label htmlFor="codeInput">Mã sản phẩm:</label>
        <input
          type="text"
          id="codeInput"
          name="code"
          value={product.code}
          onChange={handleInputChange}
          className="product-input"
          required
        />
        <label htmlFor="nameInput">Tên sản phẩm:</label>
        <input
          type="text"
          id="nameInput"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          className="product-input"
          required
        />
        <label htmlFor="priceInput">Giá:</label>
        <input
          type="number"
          id="priceInput"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          className="product-input"
          required
        />
        <label htmlFor="quantityInput">Số lượng:</label>
        <input
          type="number"
          id="quantityInput"
          name="quantity"
          value={product.quantity}
          onChange={handleInputChange}
          className="product-input"
          required
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
