import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Clock from './components/clockComponent'
import MyNavbar from './components/myNavbarComponent'
import QuotesPage from './components/quotesPageComponent'
import Home from './components/homeComponent'
import { Router } from '@reach/router'
function App() {
let home = () => <Clock />
let quotesPage = () => <MyNavbar />

  return (
    <div className="App">
      <Router>
        <Home path='/' />
        <QuotesPage path='the_Donald' />
      </Router>
    </div>
  );
}

export default App;
