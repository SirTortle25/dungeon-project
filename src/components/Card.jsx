export default function Card( props ) {
    return (
        <div className="flex w-1/6 h-100 text-Text flex-col bg-Primary border-4 border-Outline rounded-lg justify-center items-center max-w-sm shadow-md shadow-Dark">
            <div className="">
                <h1 className="">Level: {props.level}</h1>
            </div>
            <div className="">
                <h2>Class{}</h2>
                <p>{props.changes}</p>
                <h2>Items</h2>
                <p>{props.items}</p>
                <button class="bg-Outline hover:bg-Background text-Text font-bold py-2 px-4 rounded" >Open</button>
            </div>
            <div className="">
                <p>Trash</p>
            </div>
        </div>
    )
}