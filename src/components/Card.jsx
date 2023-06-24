import Button from "./Button";

export default function Card( props ) {
    return (
        <div className="flex flex-col p-4 text-custom-text bg-custom-primary border-custom-outline shadow-custom-dark border-4 rounded-lg shadow-md">
            <div className="flex justify-between w-full gap-2">
                <h1 className="w-full font-bold text-lg text-center">Level: {props.level}</h1>
                <h1 className="w-full font-bold text-lg text-center">Class: {props.class}</h1>
            </div>
            <div>
                <h2 className="font-bold text-lg">Class</h2>
                {props.classChanges.map( ( change, index ) => <p key={index}>{change}</p> )}
            </div>
            <div>
                <h2 className="font-bold text-lg">Items</h2>
                {props.itemChanges.map( ( item, index ) => <p key={index}>{item}</p> )}
            </div>
            <div className="flex justify-between w-full gap-2">
                <Button text="Open" />
                <Button text="Trash" color="bg-red-500"/>
            </div>
        </div>
    )
}