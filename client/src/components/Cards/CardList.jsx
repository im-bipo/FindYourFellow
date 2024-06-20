import React from 'react'
import Card from './Card';

const CardList = () => {
    const cardDetails =[
        {
          title: "Futsal",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis eos ipsam hic esse numquam? Ipsa ad quod, cum quos exercitationem deleniti architecto explicabo rem quia possimus aut hic eius aperiam.",
          location: "Butwal, Milanchowk"
        },
        {
          title: "Tennis",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          location: "Kathmandu"
        },
        {
          title: "Basketball",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          location: "Pokhara"
        }
      ];

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 place-items-center ">
      {cardDetails.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          location={card.location}
        />
      ))}
    </div>
  )
}

export default CardList