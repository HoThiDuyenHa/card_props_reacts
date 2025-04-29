import React,{Component} from "react";
import Data from "../Datafilter";


class Showcardfilter extends Component {
  render() {
    const prod = Data();
    let nam = prod.filter((prods) => 
        prods.type === "Thời Trang Nam" 
      );
      let nu = prod.filter((prods) => 
        prods.type === "Thời Trang Nữ"
      );
      
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <h3>Thoi trang nam</h3>
            {nam.map((prod) => {
              return (
                <ItemProduct 
                  name={prod.name}
                  giaKM={prod.old_price}
                  promotion={prod.promotion}
                  code={prod.code}
                  anh={prod.image}
                  price={prod.price}
                />
              );
            })}
          </div>
          <div className="col-sm-4">
            <h3>Thoi trang nu</h3>
            {nu.map((prod) => {
              return (
                <ItemProduct 
                  name={prod.name}
                  giaKM={prod.old_price}
                  promotion={prod.promotion}
                  code={prod.code}
                  anh={prod.image}
                  price={prod.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
class ItemProduct extends Component {
    render() {
      return (
        <div className="card">
          <img
            src={this.props.anh}
            className="card-img-top text-center"
            alt="..."
            style={{ width: "100%", height: "500px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p>{this.props.price}</p>
            <p>
              {(() => {
                if (this.props.promotion === true) {
                  return (
                    <strike className="float-right">
                      {this.props.giaKM}
                    </strike>
                  );
                }
              })()}
            </p>
            <button
              onClick={() => {
                alert("Thank you for your order");
              }}
              className="button col-md-12 text-center"
              type="button"
            >
              Add To card
            </button>
          </div>
          <div style={{ clear: "both" }} />
        </div>
      );
    }
  }


export default Showcardfilter;
