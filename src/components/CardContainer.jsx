import Card from "./Card";

export default function CardContainer( { cards }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 pt-32 sm:pt-28 pb-[26rem] sm:pb-44">
            {cards.map( ( card, index ) => <Card key={index} level={card.level} class={card.class} featureChanges={card.featureChanges} /> )}
        </div>
    );
}