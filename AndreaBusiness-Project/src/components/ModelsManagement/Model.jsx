import { Row } from "react-bootstrap";
import { ModelCard } from "./ModelCard";

export const Model = () => {
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