import logo from './logo.svg';
import './App.css';
import One from './One';
import Shape  from './Shape';
import { Dientich_hcn_function } from './Dientich_hcn_function';
import { Dientich_hcn_class } from './Dientich_hcn_class';
import { Counter_function } from './Counter_function';
import{Counter_class} from './Counter_class';

import AppContent from './Content/AppContent';
import MyForm from './MyForm';
import MarkForm from './MarkForm';

import ShowProduct from './FormContent/ShowProduct';
import Add from './Form/Add';

import React,{Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import routes from './routes';

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
        {/* <Dientich_hcn_function></Dientich_hcn_function>
        <Dientich_hcn_class></Dientich_hcn_class>
        <Counter_function></Counter_function>
        <Counter_class></Counter_class> */}


        {/* <AppContent></AppContent>
        <MyForm></MyForm>
        <MarkForm></MarkForm> */}

        {/* <ShowProduct></ShowProduct> */}
{/* 
        <Add></Add> */}


<Router>
      <div>
        <h2>Welcome to React Router Tutorial</h2>
        <hr />

        <Routes>
           {showRoutes(routes)}
          </Routes>
      </div>
    </Router>
    </div>
  );

}
 // Hàm render routes
 const showRoutes = (routes) => {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={<route.main />}
    />
  ));
    }
  
export default App;
