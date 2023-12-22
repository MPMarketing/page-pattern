import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Home/>}/>
        </Route>
        <Route path='/terms-of-use' element={<Terms/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

