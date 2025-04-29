import React, { Component } from 'react';

export class MarkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marth: "",
      physics: "",
      average: "",
      grade: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const marth = parseFloat(this.state.marth);
    const physics = parseFloat(this.state.physics);
    const average = (marth + physics) / 2;

    let grade = "";
    if (average < 5) {
      grade = "Học sinh Trung bình";
    } else if (average < 7) {
      grade = "Học sinh Khá";
    } else if (average < 8.5) {
      grade = "Học sinh Giỏi";
    } else {
      grade = "Học sinh Xuất sắc";
    }

    //Đặt lại giá trị 
    this.setState({
        average: average, 
        grade: grade
      });
    };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="marth" placeholder="Enter your Math grade" value={this.state.marth}  onChange={this.handleChange} />
          <input type="number" name="physics" placeholder="Enter your Physics grade" value={this.state.physics} onChange={this.handleChange} />
          <button type="submit">Tính điểm trung bình</button>
        </form>
        <div>
          <h2>{this.state.grade} {this.state.average}</h2>
        </div>
      </div>
    );
  }
}

export default MarkForm;
