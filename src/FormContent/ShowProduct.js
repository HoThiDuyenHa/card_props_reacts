import { useState, useEffect } from 'react';
import AddProduct from './AddProductForm';
import { Dataform } from './Dataform';
import Item from './Item';

const ShowProduct = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts)); 
    } else {
      const data = Dataform(); 
      setProducts(data);
    }
  }, []);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const addProduct = (newProduct) => {
    // Cập nhật state products
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, newProduct];
      // Lưu dữ liệu vào localStorage sau khi cập nhật
      localStorage.setItem('products', JSON.stringify(updatedProducts));

      return updatedProducts;
    });
  };

  return (
    <div>
      <button onClick={handleShowForm} className="btn btn-danger">
        {showForm ? 'Ẩn Form' : 'Hiển Thị Form'}
      </button>

      {showForm && <AddProduct addProduct={addProduct} />}

      <div className="row">
        {products.map((product) => (
          <Item product={product} />
        ))}
      </div>

    </div>
  );
};

export default ShowProduct;
