export default function Button( props ) {
    const btnColor = props.color ? props.color : "bg-custom-action";

    return (
        <button
            onClick={props.action ? props.action : () => console.log("Button doesn't do anything yet!")}
            className={`rounded-lg px-4 py-2 ${btnColor} hover:bg-custom-back text-custom-text`}>
            {props.text}
        </button>
    )
}