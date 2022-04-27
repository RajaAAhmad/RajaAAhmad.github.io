import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CS from './quiz/Cs';
import Sci from './quiz/Sci';
import Geo from './quiz/Geo';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { HashRouter, Routes, Route } from "react-router-dom";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

ReactDOM.render(

  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<App />} exact />
          <Route path='/sci' element={<Sci/>} />
          <Route path='/cs' element={<CS/>}  />
          <Route path='/geo' element={<Geo />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
