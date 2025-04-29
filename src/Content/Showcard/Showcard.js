import React, { Component } from "react";

class ShowCard extends Component {
    message = () => {
        alert("Thank you for your order");
    };

    render() {
        const { img, name, price, sale } = this.props;

        return (
            <div className="product" style={{ display: "inline-block" }}>
                <div className="text">
                    <div className="p-img">
                        <img src={img} width={150} height={150} alt={name} />
                        <div className="p-name">{name}</div>

                        {/* Hiển thị giá, có sale thì gạch giá cũ */}
                        <div className="p-price">
                            {sale != null ? (
                                <>
                                    <strike>{price}</strike> {sale}
                                </>
                            ) : (
                                price
                            )}
                        </div>

                        <div>
                            <button onClick={this.message}>Order</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowCard;
