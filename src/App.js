import React, { useState } from 'react'

import './App.css';
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer';
import Button from './components/Button';
import CardForm from './components/CardForm';

function App() {

  const [cards, setCards] = useState([])

  function addCard(new_card) {
    setCards([...cards, new_card])
  }

  function clearCards(e) {
    e.preventDefault()
    setCards([])
  }
    
  return (
    <div className="flex flex-col h-screen relative">
        <Navbar />
        <CardContainer cards={cards}/>
        <CardForm addFunction={addCard} clearCards={clearCards}/>
    </div>
  );
}

export default App;
