import React, { useState } from "react";

import Button from "./Button";

export default function Card( props ) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col flex-1 rounded-lg h-fit
                        p-4 gap-4 md:min-w-[40rem] md:max-w-[calc(20%-2rem)]
                        bg-custom-primary text-black
                        border-custom-outline border-4 
                        shadow-custom-dark shadow-md
                        hover:-translate-y-2 transition-all">
                            
            <div className="whitespace-nowrap flex bg-custom-text border-custom-outline border-4 rounded-md justify-between items-center p-4 gap-12">
                <h1 className="font-bold text-3xl">{props.class}</h1>
                <div className="flex items-center justify-center rounded-full box-border p-4 min-w-[5rem] h-20 bg-custom-primary border-custom-outline text-white border-4 drop-shadow-lg">
                    <h1 className="font-bold text-3xl">{props.level}</h1>
                </div>
            </div>
            <div>
                <h2 className="font-bold text-lg">New Features</h2>
                {props.featureChanges.map( ( feature, index ) => <p key={index}>{`Change #${index + 1}: ${feature}`}</p> )}
            </div>
            {isOpen && 
            <div className="border-4 border-custom-outline p-4 bg-custom-text rounded-md">
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
                <h1>Testing</h1>
            </div>}
            <div className="flex justify-between w-full gap-2">
                <Button action={() => setIsOpen(!isOpen)} text="Open" color="bg-custom-back"/>
                <Button action={() => props.removeCard(props.index)} text="Trash" color="bg-red-500"/>
            </div>
        </div>
    )
}