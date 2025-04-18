import logo from './logo.svg';
import './App.css';
import One from './One';
import Shape  from './Shape';
function App(){
  // return <Greeting name="Duyên Hà"/>;
  return (
    <div className='App'>
        <div className="Container">
          <div className="row">
            <One linkanh="https://i.pinimg.com/736x/39/a0/ec/39a0eca27ba4155bc5f68ef0f8f63c61.jpg" tensanpham="Váy lụa" gia="40000"></One>
            <One linkanh="https://i.pinimg.com/736x/39/a0/ec/39a0eca27ba4155bc5f68ef0f8f63c61.jpg" tensanpham="Áo gấm" gia="550000"></One>
            <One linkanh="https://i.pinimg.com/736x/39/a0/ec/39a0eca27ba4155bc5f68ef0f8f63c61.jpg" tensanpham="Áo cà sa" gia="660000"></One>
            <One linkanh="https://i.pinimg.com/736x/39/a0/ec/39a0eca27ba4155bc5f68ef0f8f63c61.jpg" tensanpham="Áo dài " gia="770000"></One>
            <One linkanh="https://i.pinimg.com/736x/39/a0/ec/39a0eca27ba4155bc5f68ef0f8f63c61.jpg" tensanpham="Váy" gia="550000"></One>
          </div>
        </div>
        <Shape dai="200px" rong="200px" bgr="Pink"></Shape>
    </div>
  
  );
}
// function Greeting(props){
//   return <h1>Hello,{props.name}!</h1>
// }
export default App;
