import logo from './logo.svg';
import './App.css';
import One from './One';
import Shape  from './Shape';
import { Dientich_hcn_function } from './Dientich_hcn_function';
import { Dientich_hcn_class } from './Dientich_hcn_class';
import { Counter_function } from './Counter_function';
import{Counter_class} from './Counter_class';
function App(){
  // return <Greeting name="Duyên Hà"/>;
  return (
    <div className='App'>
        {/* <div className="Container">
          <div className="row">
            <One linkanh="https://i.pinimg.com/736x/39/a0/ec/39a0eca27ba4155bc5f68ef0f8f63c61.jpg" tensanpham="Váy lụa" gia="40000"></One>
            <One linkanh="https://i.pinimg.com/736x/39/a0/ec/39a0eca27ba4155bc5f68ef0f8f63c61.jpg" tensanpham="Áo gấm" gia="550000"></One>
            <One linkanh="https://i.pinimg.com/736x/39/a0/ec/39a0eca27ba4155bc5f68ef0f8f63c61.jpg" tensanpham="Áo cà sa" gia="660000"></One>
            <One linkanh="https://i.pinimg.com/736x/39/a0/ec/39a0eca27ba4155bc5f68ef0f8f63c61.jpg" tensanpham="Áo dài " gia="770000"></One>
            <One linkanh="https://i.pinimg.com/736x/39/a0/ec/39a0eca27ba4155bc5f68ef0f8f63c61.jpg" tensanpham="Váy" gia="550000"></One>
          </div>
        </div> */}
        {/* <Shape dai="200px" rong="200px" bgr="Pink"></Shape> */}
        <Dientich_hcn_function></Dientich_hcn_function>
        <Dientich_hcn_class></Dientich_hcn_class>
        <Counter_function></Counter_function>
        <Counter_class></Counter_class>
    </div>
  
  );
}
// function Greeting(props){
//   return <h1>Hello,{props.name}!</h1>
// }
export default App;
