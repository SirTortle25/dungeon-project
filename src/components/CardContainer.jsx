import Card from "./Card";

export default function CardContainer() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
            <Card
                level="5"
                gameClass="Fighter"
                classChanges={["+1 Attack", "+1 Defense"]}
                itemChanges={["+1 Vorple Sword", "-1 Gold Shield"]}/>

            <Card
                level="12"
                gameClass="Goat"
                classChanges={[]}
                itemChanges={["+1 Vorple Sword", "-1 Gold Shield"]}/>

            <Card
                level="17"
                gameClass="Microwave Goat"
                classChanges={[]}
                itemChanges={["+1 Vorple Sword", "-1 Gold Shield"]}/>
        </div>
    );
}