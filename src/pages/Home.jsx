import React, { useState, useEffect } from 'react'
import Button from "../components/Button";
import Card from "../components/Card";
import CardForm from '../components/CardForm';

import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://xdcxzylhawkrdkloiiyw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkY3h6eWxoYXdrcmRrbG9paXl3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDY2MDE2OCwiZXhwIjoyMDA2MjM2MTY4fQ.WzdIAbb1mN_hPfSKeI3ganMFcWklUU4wt33qbC36QZ8");

export default function Home() {

  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);

  async function loadData() {
    let {data} = await supabase.from("Cards").select();
    setCards(data);
  }

  useEffect(() => {loadData()}, []);

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
    setCards(cards.filter(card => index !== cards.indexOf(card)));
  }
    
  return (
    <div className="">
        <div className="flex flex-row flex-wrap gap-8 p-8">
            {cards.map( ( card, index ) => <Card key={card.uuid} visible_key={card.uuid} index={index} level={card.level} class={card.class} featureChanges={card.featureChanges} removeCard={removeCard}/> )}
        </div>
        {showForm ?
        <CardForm addFunction={addCard} clearCards={clearCards} cancel={() => setShowForm(false)}/>
        :
        <div className="fixed bottom-[3.75rem] right-[3.75rem]">
            <Button action={() => setShowForm(true)} color="bg-emerald-600" text="Show Form" />
        </div>}
    </div>
  );
}