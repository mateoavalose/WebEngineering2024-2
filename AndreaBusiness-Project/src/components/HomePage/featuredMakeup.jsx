import React from "react";
import { MakeupCard } from "../Makeup/MakeupCard";

export const FeaturedMakeup = () => {
  const makeup = [
    {
      name: "Lipstick",
      description: "Long lasting lipstick",
      price: "$10",
      imgUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Eyeliner",
      description: "Waterproof eyeliner",
      price: "$5",
      imgUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Foundation",
      description: "Matte foundation",
      price: "$15",
      imgUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Mascara",
      description: "Volumizing mascara",
      price: "$7",
      imgUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Eyeshadow",
      description: "Shimmery eyeshadow",
      price: "$8",
      imgUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Blush",
      description: "Pigmented blush",
      price: "$6",
      imgUrl: "https://via.placeholder.com/150"
    }
  ];

  const featuredMakeup = makeup.slice(0, 6);
  
  return (
    <section className="featured-makeup">
      <h2>Featured Makeup</h2>
      <div className="featured-makeup-grid">
        {featuredMakeup.map((makeup, index) => (
          <MakeupCard key={index} {...makeup} />
        ))}
      </div>
    </section>
  );
};