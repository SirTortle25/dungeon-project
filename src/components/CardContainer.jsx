import Card from "./Card";

export default function CardContainer() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
            <Card
                level="5"
                class="Fighter"
                featureChanges={["+1 Vorple Sword", "-1 Gold Shield"]}/>

            <Card
                level="12"
                class="Goat"
                featureChanges={["+1 Vorple Sword", "-1 Gold Shield"]}/>

            <Card
                level="17"
                class="Microwave Goat"
                featureChanges={["+1 Vorple Sword", "-1 Gold Shield"]}/>
        </div>
    );
}