import logo from './logo.svg';
import './App.css';
import { BookList } from './components/BookList';
import { Header } from './components/Header';
import { Timer } from './components/Timer';
import { Clicker } from './components/Clicker';
import { Counter } from './components/Counter';

function App() {
  const books = [
    {
title: 'Harry Potter',
author: 'Jk R',
description: 'Wizard school'
    },
    {
      title: 'Batman',
      author: 'DC',
      description: 'DC'
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Header title="BookS"/>
        <Timer/>
        <Clicker/>
        <Counter/>
        <img src={logo} className="App-logo" alt="logo" />
        <BookList books={books}/>
      
      </header>
    </div>
  );
}

export default App;
