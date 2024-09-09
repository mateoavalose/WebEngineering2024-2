import { ModelCard } from "./ModelCard";

export const Model = () => {
  const models = [
    {
      name: "Model 1",
      portfolio: "Portfolio 1",
      imgUrl: "https://via.placeholder.com/150",
      booking: "Booking 1",
      featured: true,
    },
    {
      name: "Model 2",
      portfolio: "Portfolio 2",
      imgUrl: "https://via.placeholder.com/150",
      booking: "Booking 2",
      featured: false
    },
    {
      name: "Model 3",
      portfolio: "Portfolio 3",
      imgUrl: "https://via.placeholder.com/150",
      booking: "Booking 3",
      featured: true
    },
    {
      name: "Model 4",
      portfolio: "Portfolio 4",
      imgUrl: "https://via.placeholder.com/150",
      booking: "Booking 4",
      featured: false
    },
    {
      name: "Model 5",
      portfolio: "Portfolio 5",
      imgUrl: "https://via.placeholder.com/150",
      booking: "Booking 5",
      featured: false
    },
    {
      name: "Model 6",
      portfolio: "Portfolio 6",
      imgUrl: "https://via.placeholder.com/150",
      booking: "Booking 6",
      featured: true
    },
  ];

  return (
    <section className="model" id="model">
      <div className="model-grid">
        {
          models.map((model, index) => {
            return (
              <ModelCard key={index} {...model} />
            )
          })
        }
      </div>
    </section>
  )
}