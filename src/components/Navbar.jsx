import Button from "./Button";

export default function Navbar() {
    return (
        <div className="p-4 flex flex-col sm:flex-row justify-between items-center w-full bg-custom-primary border-b-4 border-custom-outline fixed top-0 z-10">
            <h1 className="text-md font-bold">Dungeon Project</h1>
            <div className="flex gap-2">
                <Button text="Home" />
                <Button text="About" />
                <Button text="Contact"/>
            </div>
        </div>
    );
}