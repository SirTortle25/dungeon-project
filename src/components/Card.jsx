export default function Card( props ) {
    return (
        <div className="flex flex-col bg-amber-600 rounded-lg justify-center items-center max-w-sm shadow-md shadow-amber-800">
            <div className="">
                <h1 className="">Level: {props.level}</h1>
            </div>
            <div className="">
                <h2>Class{}</h2>
                <p>{props.changes}</p>
                <h2>Items</h2>
                <p>{props.items}</p>
            </div>
            <div className="">
                <p>Trash</p>
            </div>
        </div>
    )
}