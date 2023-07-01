export default function Button( props ) {
    const btnColor = props.color ? props.color : "bg-custom-action";

    return (
        <button
            onClick={props.action ? props.action : () => console.log("Button doesn't do anything yet!")}
            className={`whitespace-nowrap rounded-lg px-4 py-2 ${btnColor} text-custom-text transition ease-in-out hover:bg-custom-hover hover:scale-110`}>
            {props.text}
        </button>
    )
}