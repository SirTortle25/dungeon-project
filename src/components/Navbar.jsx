import Button from "./Button";

export default function Navbar() {
    return (
        <div className="p-4 flex flex-col gap-2 justify-center items-center w-full bg-custom-primary border-b-4 border-custom-outline">
            <h1 className="text-2xl font-bold text-custom-back">Dungeon Project (new)</h1>
            { <div className="flex gap-2">
                <Button text="Home" />
                <Button text="About" />
                <Button text="Contact"/>
                <Button text="Characters"/>
            </div>}
        </div>
    );
}