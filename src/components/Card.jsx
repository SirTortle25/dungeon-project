import Button from "./Button";

export default function Card( props ) {
    return (
        <div className="flex w-1/6 h-100 text-custom-text flex-col bg-custom-primary border-4 border-custom-outline rounded-lg justify-center items-center max-w-sm shadow-md shadow-custom-dark">
            <div className="">
                <h1 className="">Level: {props.level}</h1>
            </div>
            <div className="">
                <h2>Class{}</h2>
                <p>{props.changes}</p>
                <h2>Items</h2>
                <p>{props.items}</p>
                <Button text="Open" />
            </div>
            <div className="">
                <p>Trash</p>
            </div>
        </div>
    )
}