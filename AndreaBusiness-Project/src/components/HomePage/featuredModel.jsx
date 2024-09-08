import React from 'react';
import { ModelCard } from '../ModelsManagement/ModelCard';

export const FeaturedModel = () => {
  const models = [
    {
      name: "Model 1",
      portfolio: "Portfolio 1",
      imgUrl: "https://via.placeholder.com/150",
      booking: "Booking 1",
    },
    {
      name: "Model 2",
      portfolio: "Portfolio 2",
      imgUrl: "https://via.placeholder.com/150",
      booking: "Booking 2",
    },
    {
      name: "Model 3",
      portfolio: "Portfolio 3",
      imgUrl: "https://via.placeholder.com/150",
      booking: "Booking 3",
    },
    {
      name: "Model 4",
      portfolio: "Portfolio 4",
      imgUrl: "https://via.placeholder.com/150",
      booking: "Booking 4",
    },
    {
      name: "Model 5",
      portfolio: "Portfolio 5",
      imgUrl: "https://via.placeholder.com/150",
      booking: "Booking 5",
    },
    {
      name: "Model 6",
      portfolio: "Portfolio 6",
      imgUrl: "https://via.placeholder.com/150",
      booking: "Booking 6",
    },
  ];

  const featuredModels = models.slice(0, 3);
  
  return (
    <section className="featured-models">
      <h2>Featured Models</h2>
      <div className="model-grid">
        {featuredModels.map((model, index) => (
          <ModelCard key={index} {...model} />
        ))}
      </div>
    </section>
  );
};