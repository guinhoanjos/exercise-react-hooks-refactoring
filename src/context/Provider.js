// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({children}) {
  const [cars, setCars] = useState({})
 function moveCar(car, side) {
   console.log(cars)
   setCars({...cars, [car]:side})
  };
    const context = {
      cars,
      moveCar,
    };



    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
};

export default Provider;
