import { MakeupCard } from "./MakeupCard";

export const Makeup = () => {
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

  return (
    <section className="makeup" id="makeup">
      <div className="makeup-grid">
        {
          makeup.map((makeup, index) => {
            return (
              <MakeupCard key={index} {...makeup} />
            )
          })
        }
      </div>
    </section>
  )
}