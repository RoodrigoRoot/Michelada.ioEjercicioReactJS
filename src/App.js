import React from 'react';
import Nav from './ComponentsCursos/Navegacion/Nav'

import Video from './ComponentsVideo/Video/video'
import './App.css';

import Index from './ComponentsCursos/Stack/index';
import {BrowserRouter, Route} from 'react-router-dom'

const App= ()=> {
  return (
    <div className="App">
      <header>
      <BrowserRouter>
      <Nav/>
      <Route exact path='/' component={Index} />
      <Route exact path='/videos' component={Video} />
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
