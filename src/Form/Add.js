// import React, { Component } from "react";
// // import data from "../data"; // Không cần nếu products đã truyền qua props

// class Add extends Component {
//     constructor(props) {
//         super(props);

//         this.list = this.props.products || []; // <-- Đặt ở đây!

//         this.state = {
//             id: this.list.length > 0 ? parseInt(this.list[this.list.length - 1].id) + 1 : 1,
//             name: "",
//             name_category: "Thời trang nam",
//             code: "",
//             image: "",
//             price: "",
//             old_price: "",
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
    
//     // Các method khác như handleChange, handleSubmit...
// }

    

//     handleChange = (event) => {
//         let name = event.target.name;
//         let val = event.target.value;

//         if (event.target.name === "image") {
//             val = "images/" + document.getElementById("image").files.item(0).name;
//         }

//         this.setState({ [name]: val });
//     };

//     saveProducts() {
//         localStorage.setItem("products", JSON.stringify(this.list));
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.list.push(this.state);
//         alert("Sản phẩm đã được thêm vào!");
//         this.saveProducts();
//         window.location.reload(true);
//     };

//     render() {
//         return (
//             <div className="col-sm-4">
//                 <form id="form" onSubmit={this.handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="name">Name</label>
//                         <input
//                             className="form-control"
//                             id="name"
//                             name="name"
//                             placeholder="Điền tên"
//                             onChange={this.handleChange}
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="name_category">Category</label>
//                         <select
//                             className="form-control"
//                             name="name_category"
//                             onChange={this.handleChange}
//                             defaultValue={this.props.products.name_category}
//                         >
//                             <option value="Thời trang nam">Nam</option>
//                             <option value="Thời trang nữ">Nữ</option>
//                         </select>
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="code">Code</label>
//                         <input
//                             className="form-control"
//                             id="code"
//                             name="code"
//                             placeholder="Mã code"
//                             onChange={this.handleChange}
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="image" id="avatar-label">
//                             Image
//                         </label>
//                         <input
//                             type="file"
//                             className="form-control"
//                             id="image"
//                             name="image"
//                             onChange={this.handleChange}
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="price">Price</label>
//                         <input
//                             className="form-control"
//                             id="price"
//                             name="price"
//                             placeholder="10000"
//                             onChange={this.handleChange}
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="old_price">Price</label>
//                         <input
//                             className="form-control"
//                             id="old_price"
//                             name="old_price"
//                             placeholder="15000"
//                             onChange={this.handleChange}
//                         />
//                     </div>

//                     <button className="btn btn-primary" type="submit" id="submit" Onclick={this.handleSubmit}>
//                         Add Product
//                     </button>
//                 </form>
//             </div>
//         );
//     }


// export default Add;
