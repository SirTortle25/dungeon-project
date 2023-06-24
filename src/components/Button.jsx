export default function Button( props ) {
    return (
        <button className="rounded-lg px-4 py-2 bg-Action hover:bg-Back text-custom-">
            {props.text}
        </button>
    )
}