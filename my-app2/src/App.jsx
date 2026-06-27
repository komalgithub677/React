import { useState } from 'react';
import './App.css';
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";
import Button from "./Button";

function description() {
  return <h3>I am the description!</h3>;
}

function App() {
  return (
    <>
      <MsgBox userName="shradha" textColor="yellow" />

      <MsgBox userName="ApnaCollege" textColor="green" />
       <ProductTab />
       <Button/>
       
    </>
  );
}

export default App;