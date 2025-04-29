import React from 'react';

const Item = ({ product }) => {
  return (
    <div className="item-container">
      <div className="card text-center" style={{ width: '18rem' }}>
        <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{product.name}</h5>
          <p className="card-text">{product.code}</p>
          <p className="card-text">
            <span className="text-danger fw-bold">{product.price} đ</span>
            <span className="text-muted text-decoration-line-through ms-2">{product.old_price} đ</span>
          </p>
          <button className="btn btn-warning">Đặt mua</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
