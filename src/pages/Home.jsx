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
  
  async function addCard(card) {
    const {data, error} = await supabase.from("Cards").insert([card]).select()
    if (data) setCards([...cards,data[0]]);
    if (error) console.error(error);
  }

  useEffect(() => {loadData()}, []);

  async function clearCards(e) {
    e.preventDefault();
    setCards([]);
    await supabase.from("Cards").delete().gt("level",0);
    await supabase.from("Cards").delete().lt("level",0);
    await supabase.from("Cards").delete().eq("level",0);
  }

  async function removeCard(index, id) {
    setCards(cards.filter(card => index !== cards.indexOf(card)));
    const { error } = await supabase.from("Cards").delete().eq("id",id);
    if (error) console.error(error);
  }
    
  return (
    <div className="">
        <div className="flex flex-row flex-wrap gap-8 p-8">
            {cards.map( ( card, index ) => <Card key={card.id} visible_key={card.id} index={index} level={card.level} class={card.class} featureChanges={card.featureChanges} removeCard={removeCard}/> )}
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