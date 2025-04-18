import React, { Component } from 'react';

class One extends Component {
    render() {
        return (
            <div className="col-3" >
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.props.linkanh} className="card-img-top" alt="Sản phẩm" 
                    />
                    <div className="card-body">
                        <h5 className="card-title">Sản phẩm: {this.props.tensanpham}</h5>
                        <p className="card-text">
                            Giá sản phẩm: {this.props.gia}
                        </p>
                        <a href="#" className="btn btn-primary">Go Detail</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default One;
