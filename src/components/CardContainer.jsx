import Card from "./Card";

export default function CardContainer( { cards, removeCard }) {
    return (
        // <div className="grid auto-cols-max grid-flow-col gap-8 px-8 pt-32 sm:pt-28 pb-[26rem] sm:pb-44">
        <div className="flex flex-row flex-wrap gap-8 px-8 pt-32 sm:pt-28 pb-[26rem] sm:pb-44">
            {cards.map( ( card, index ) => <Card key={index} index={index} level={card.level} class={card.class} featureChanges={card.featureChanges} removeCard={removeCard}/> )}
        </div>
    );
}