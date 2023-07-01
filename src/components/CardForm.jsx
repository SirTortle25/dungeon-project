import React, { useState } from "react";
import Button from "./Button";

export default function CardForm( { addFunction, clearCards }) {
    const [ level, setLevel ] = useState( 0 );
    const [ classType, setClassType ] = useState( "" );
    const [ featureChanges, setFeatureChanges ] = useState( "" );

    function createAndAddCard(e) {
        e.preventDefault();
        const newCard = {
            level: level,
            class: classType,
            featureChanges: featureChanges.split(", ")
        };
        addFunction( newCard );
    }

    function clearForm(e) {
        e.preventDefault();
        setLevel( 0 );
        setClassType( "" );
        setFeatureChanges( "" );
    }

    return (
        <footer className="flex flex-col p-6 justify-center items-center bg-custom-primary border-y-4 border-custom-outline fixed bottom-0 w-full">
            <form className="flex flex-col sm:flex-row gap-4 w-full sm:w-1/2">
                <label className="flex flex-col gap-1">
                    <span className="font-bold">Level</span>
                    <input type="number" className="rounded-lg border-custom-outline border-4 p-2" id="levelInput" value={level} onChange={e => setLevel( e.target.value )}/>
                </label>
                <label className="flex flex-col gap-1">
                    <span className="font-bold">Class</span>
                    <input type="text" className="rounded-lg border-custom-outline border-4 p-2" id="classInput" value={classType} onChange={e => setClassType( e.target.value )}/>
                </label>
                <label className="flex flex-col gap-1">
                    <span className="font-bold">Features</span>
                    <input type="text" className="rounded-lg border-custom-outline border-4 p-2" id="featureInput" value={featureChanges} onChange={e => setFeatureChanges( e.target.value )}/>
                </label>
                <div className="flex justify-between items-end gap-2">
                    <Button text="Add" action={createAndAddCard}/>
                    <Button text="Cancel" action={clearForm} color="bg-red-500"/>
                    <Button text="Clear All" action={clearCards} color="bg-red-500"/>
                </div>
            </form>
        </footer>
    );
}