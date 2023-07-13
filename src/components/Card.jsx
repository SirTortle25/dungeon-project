import Button from "./Button";

export default function Card( props ) {
    return (
        <div className="flex flex-col rounded-lg
                        p-4 gap-4 min-w-[30rem]
                        bg-custom-primary text-black
                        border-custom-outline border-4 
                        shadow-custom-dark shadow-md
                        hover:rotate-6 hover:scale-105 hover:z-20 transition-transform ">
                            
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
            <div className="flex justify-between w-full gap-2">
                <Button text="Open" />
                <Button action={() => props.removeCard(props.index)} text="Trash" color="bg-red-500"/>
            </div>
        </div>
    )
}