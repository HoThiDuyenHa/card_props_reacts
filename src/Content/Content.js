import React, { Component } from 'react';
import ShowCard from "./Showcard/Showcard";
import { getData } from './Data';

class Content extends Component {
  render() {
    console.log(getData());
    const products = getData();
    return (
      <div>
        <div id="giay">
          <h2>SHOES</h2>
          <hr></hr>
          {/* dùng filter chọn ra product loại giày và show ra */}
          {products.filter(product => product.type == "giay").map(filteredProduct => (
            <ShowCard 
              name={filteredProduct.name} 
              img={filteredProduct.img} 
              price={filteredProduct.price} 
              sale={filteredProduct.sale}/>
          ))}
        </div>
        <div id='tui'>
          <h2>BAGS</h2>
          <hr></hr>
          {/* dùng filter chọn ra product loại túi và show ra */}
          {products.filter(product => product.type == "tui").map(filteredProduct => (
            <ShowCard name={filteredProduct.name} img={filteredProduct.img} price={filteredProduct.price} sale={filteredProduct.sale}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Content;
