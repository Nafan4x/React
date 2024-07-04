import React, {Component} from "react";
import Figure from 'react-bootstrap/Figure';
import Papa from '../Components/Papich.jpg'
import Yas from '../Components/Yasuo.jpg'


export function Autor() {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={Papa} roundedCircle
      />
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={Yas} roundedCircle
      />
      <Figure.Caption>
        Гений этого мира
      </Figure.Caption>

      
           </Figure>
       
  );
}