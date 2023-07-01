import Button from "./Button";

export default function CardForm() {
    return (
        <footer className="flex flex-col absolute p-6 justify-center items-center bg-custom-primary border-y-4 border-custom-outline sticky bottom-0">
            <h1 className="text-2xl font-bold">Add a Card</h1>
            <form className="flex flex-col gap-4 w-full sm:w-1/2">
                <label className="flex flex-col gap-1">
                    <span className="font-bold">Level</span>
                    <input type="number" className="rounded-lg border-custom-outline border-4 p-2" id="levelInput"/>
                </label>
                <label className="flex flex-col gap-1">
                    <span className="font-bold">Class</span>
                    <input type="text" className="rounded-lg border-custom-outline border-4 p-2" id="classInput"/>
                </label>
                <label className="flex flex-col gap-1">
                    <span className="font-bold">Added features</span>
                    <input type="text" className="rounded-lg border-custom-outline border-4 p-2" id="featureChangesInput"/>
                </label>
                <div className="flex justify-between w-full gap-2">
                    <Button text="Add" action/>
                    <Button text="Cancel" color="bg-red-500"/>
                </div>
            </form>
        </footer>
    );
}