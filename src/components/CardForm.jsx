import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from 'uuid'

export default function CardForm( { addFunction, clearCards, cancel }) {
    const [ level, setLevel ] = useState();
    const [ classType, setClassType ] = useState( "" );
    const [ featureChanges, setFeatureChanges ] = useState( "" );

    const field = useRef()

    useEffect(() => {
        field.current.focus();
    }, [])

    function createAndAddCard(e) {
        e.preventDefault();
        const newCard = {
            level: level,
            class: classType,
            featureChanges: featureChanges
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
        <div className="w-96 flex flex-col gap-6 p-6 justify-center items-center bg-custom-primary border-4 border-custom-outline rounded-xl fixed bottom-8 right-8">
            <label className="flex flex-col gap-1 w-full">
                <span className="font-bold">Level</span>
                <input ref={field} type="number" className="rounded-lg border-custom-outline border-4 p-2" id="levelInput" value={level} onChange={e => setLevel( e.target.value )}/>
            </label>
            <label className="flex flex-col gap-1 w-full">
                <span className="font-bold">Class</span>
                <input placeholder="Fighter..." type="text" className="rounded-lg border-custom-outline border-4 p-2" id="classInput" value={classType} onChange={e => setClassType( e.target.value )}/>
            </label>
            <label className="flex flex-col gap-1 w-full">
                <span className="font-bold">Features</span>
                <input placeholder="blah, blah, blah, blah, blah, blah..." type="text" className="rounded-lg border-custom-outline border-4 p-2" id="featureInput" value={featureChanges} onChange={e => setFeatureChanges( e.target.value )}/>
            </label>
            <div className="grid grid-cols-3 gap-4 w-full">
                <Button text="Add" action={createAndAddCard} color="bg-sky-500"/>
                <Button text="Clear All" action={clearCards} color="bg-rose-500"/>
                <Button text="Hide" action={cancel} color="bg-custom-outline"/>
            </div>
        </div>
    );
}