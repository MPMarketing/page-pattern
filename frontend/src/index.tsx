import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import YouHome from './Pages/YouHome';
import Quizz from './Pages/Quizz';
import HomeQuizz from './Pages/HomeQuizz';
import HomeYT from './Pages/HomeYT';
import QuizzComplete from './Pages/QuizzComplete';

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
        <Route path='/youtube' element={<HomeYT/>}/>
        <Route path='/quizz-complete' element={<QuizzComplete/>}/>
        <Route path='/quizz-completed' element={<HomeQuizz/>}/>
        <Route path='/free-presentation' element={<YouHome/>}/>
        <Route path='/terms-of-use' element={<Terms/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/quizz' element={<Quizz/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

