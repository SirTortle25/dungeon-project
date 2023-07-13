import Card from "./Card";

export default function CardContainer( { cards, removeCard }) {
    return (
        <div className="grid grid-flow-col auto-cols-min gap-8 px-8 pt-32 sm:pt-28 pb-[26rem] sm:pb-44">
            {cards.map( ( card, index ) => <Card key={index} index={index} level={card.level} class={card.class} featureChanges={card.featureChanges} removeCard={removeCard}/> )}
        </div>
    );
}