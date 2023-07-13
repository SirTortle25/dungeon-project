import React, { useState, useEffect } from 'react'

import './App.css';
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer';
import Button from './components/Button';
import CardForm from './components/CardForm';

function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const savedCards = localStorage.getItem('cards');
    setCards(savedCards ? JSON.parse(savedCards) : []);
  }, []); // load cards

  useEffect(() => {
    if (cards.length === 0) return;
    localStorage.setItem('cards',JSON.stringify(cards));
  }, [cards]); // save cards

  function addCard(new_card) {
    setCards([...cards, new_card]);
  }

  function clearCards(e) {
    e.preventDefault();
    setCards([]);
    localStorage.removeItem('cards');
  }

  function removeCard(index) {
    console.log(index);
    setCards(cards.filter(card => cards.indexOf(card) )
  }
    
  return (
    <div className="flex flex-col h-screen relative">
        <Navbar />
        <CardContainer cards={cards} removeCard={removeCard}/>
        <CardForm addFunction={addCard} clearCards={clearCards}/>
    </div>
  );
}

export default App;
