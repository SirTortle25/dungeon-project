import Button from "./Button";

export default function CardForm() {
    return (
        <div className="flex flex-col p-6 justify-center items-center bg-custom-primary border-y-4 border-custom-outline">
            <h1 className="text-2xl font-bold">Add a Card</h1>
            <form className="flex flex-col gap-4 w-full sm:w-1/2">
                <label className="flex flex-col gap-1">
                    <span className="font-bold">Level</span>
                    <input type="number" className="rounded-lg border-custom-outline border-4 p-2" />
                </label>
                <label className="flex flex-col gap-1">
                    <span className="font-bold">Class</span>
                    <input type="text" className="rounded-lg border-custom-outline border-4 p-2" />
                </label>
                <label className="flex flex-col gap-1">
                    <span className="font-bold">Class Changes</span>
                    <input type="text" className="rounded-lg border-custom-outline border-4 p-2" />
                </label>
                <label className="flex flex-col gap-1">
                    <span className="font-bold">Item Changes</span>
                    <input type="text" className="rounded-lg border-custom-outline border-4 p-2" />
                </label>
                <div className="flex justify-between w-full gap-2">
                    <Button text="Add" />
                    <Button text="Cancel" color="bg-red-500"/>
                </div>
            </form>
        </div>
    );
}