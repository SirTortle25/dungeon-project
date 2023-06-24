import Button from "./Button";

export default function Navbar() {
    return (
        <div className="p-4 flex flex-row justify-between items-center w-full bg-custom-primary border-b-4 border-custom-outline">
            <h1 className="text-md font-bold">Dungeon Project</h1>
            <div>
                <Button text="Home" />
                <Button text="About" />
                <Button text="Contact" />
            </div>
        </div>
    );
}