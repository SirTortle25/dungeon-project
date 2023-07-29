import React, { useState, useEffect } from "react";

import Button from "./Button";

function Feature( { id, index, feature } ) {

    const [details, setDetails] = useState("");

    const idString = `${id}${index}${feature}`

    // load the saved value if there is one
    useEffect(() => {
        if (localStorage.getItem(idString)) {
            setDetails(localStorage.getItem(idString));
        }
    }, [])

    // save the details whenever they change
    useEffect(() => {
        localStorage.setItem(idString,details);
    }, [details])

    return (
        <div className="border-b-4 pb-2 border-custom-outline">
            <h1 className="font-bold text-lg">{`#${index}: ${feature}`}</h1>
            <textarea value={details} onChange={(e) => setDetails(e.target.value)} className="w-full border-4 outline-none border-custom-outline p-4 bg-custom-text rounded-md"></textarea>
        </div>
    );
}

export default function Card( props ) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col flex-1 rounded-lg h-fit
                        p-4 gap-4 md:min-w-[40rem] md:max-w-[calc(20%-2rem)]
                        bg-custom-primary text-black
                        border-custom-outline border-4 
                        shadow-custom-dark shadow-md">
                            
            <div className="whitespace-nowrap flex bg-custom-text border-custom-outline border-4 rounded-md justify-between items-center p-4 gap-12">
                <h1 className="font-bold text-3xl">{props.class}</h1>
                <div className="flex items-center justify-center rounded-full box-border p-4 min-w-[5rem] h-20 bg-custom-primary border-custom-outline text-white border-4 drop-shadow-lg">
                    <h1 className="font-bold text-3xl">{props.level}</h1>
                </div>
            </div>
            {isOpen && <div className="flex flex-col gap-2">
                <h2 className="font-bold text-lg">New Features</h2>
                {props.featureChanges.map( ( feature, index ) =>  <Feature key={feature} id={props.visible_key} index={index + 1} feature={feature}/>)}
            </div>}
            <div className="flex justify-between w-full gap-2">
                <Button action={() => setIsOpen(!isOpen)} text={isOpen ? "Close" : "Open"} color="bg-custom-back"/>
                <Button action={() => props.removeCard(props.index)} text="Trash" color="bg-red-500"/>
            </div>
        </div>
    )
}