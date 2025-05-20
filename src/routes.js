import React from "react";
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';

const routes = [
    {
        path: '/about',
        main: () => <About />
    },
    {
        path: '/contact',
        main: () => <Contact />
    },
    {
        path: '/',
        main: () => <Home />
    }
]
export default  routes;