import React from 'react';
import '../src/css/main.css';
import Header from "./components/Header";
import SomethingToSay from './components/SomeThingToSay';
import Footer from './components/Footer';



export default function App() {
 
  return ( 
    <div className="App ">
          <Header/>
          <SomethingToSay/>
          <Footer/>
    </div>
  )
}
