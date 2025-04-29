import React, { useState } from 'react';


// Dinh nghia component nay nhan 1 ham component cha
const AddProduct = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    code: "",
    image: "",
    price: "",
    oldPrice: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
    //copy lai du lieu tu form cu bang ...prevState, sau do thay doi truong du lieu can thay doi.
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(formData);


    // thay doi state product => thay doi state products (them pd m v pd cu)
    addProduct(formData);

    setFormData({
      name: "",
      category: "",
      code: "",
      image: "",
      price: "",
      oldPrice: ""
    });
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h4 className="mb-4">Add Product</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nhập tên sản phẩm"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select
              className="form-select"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="code" className="form-label">Code</label>
            <input
              type="text"
              className="form-control"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              placeholder="Nhập mã sản phẩm"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input type="text" className="form-control" id="image" name="image" value={formData.image} placeholder="Nhập link img sản phẩm" onChange={handleChange}/>
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Giá bán"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="oldPrice" className="form-label">Old price</label>
            <input
              type="number"
              className="form-control"
              id="oldPrice"
              name="oldPrice"
              value={formData.old_price}
              onChange={handleChange}
              placeholder="Giá cũ"
            />
          </div>

          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
