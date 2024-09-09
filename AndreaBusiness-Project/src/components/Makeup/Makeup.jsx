import { MakeupCard } from "./MakeupCard";

export const Makeup = () => {
  const makeup = [
    {
      name: "Lipstick",
      description: "Long lasting lipstick",
      price: "$10",
      imgUrl: "https://via.placeholder.com/150",
      featured: false
    },
    {
      name: "Eyeliner",
      description: "Waterproof eyeliner",
      price: "$5",
      imgUrl: "https://via.placeholder.com/150",
      featured: false
    },
    {
      name: "Foundation",
      description: "Matte foundation",
      price: "$15",
      imgUrl: "https://via.placeholder.com/150",
      featured: false
    },
    {
      name: "Mascara",
      description: "Volumizing mascara",
      price: "$7",
      imgUrl: "https://via.placeholder.com/150",
      featured: true
    },
    {
      name: "Eyeshadow",
      description: "Shimmery eyeshadow",
      price: "$8",
      imgUrl: "https://via.placeholder.com/150",
      featured: false
    },
    {
      name: "Blush",
      description: "Pigmented blush",
      price: "$6",
      imgUrl: "https://via.placeholder.com/150",
      featured: false
    },
    {
      name: "Bronzer",
      description: "Matte bronzer",
      price: "$9",
      imgUrl: "https://via.placeholder.com/150",
      featured: false
    },
    {
      name: "Highlighter",
      description: "Glowy highlighter",
      imgUrl: "https://via.placeholder.com/150",
      featured: false
    },
    {
      name: "Setting Spray",
      description: "Long lasting setting spray",
      price: "$10",
      imgUrl: "https://via.placeholder.com/150",
      featured: true
    },
    {
      name: "Concealer",
      description: "Full coverage concealer",
      price: "$8",
      imgUrl: "https://via.placeholder.com/150",
      featured: true
    },
    {
      name: "Eyebrow Pencil",
      description: "Precise eyebrow pencil",
      price: "$5",
      imgUrl: "https://via.placeholder.com/150",
      featured: false
    },
    {
      name: "Makeup Remover",
      description: "Gentle makeup remover",
      price: "$6",
      imgUrl: "https://via.placeholder.com/150",
      featured: true
    },
    {
      name: "Eyelash Curler",
      description: "Curl your lashes",
      price: "$3",
      imgUrl: "https://via.placeholder.com/150",
      featured: true
    },
    {
      name: "Beauty Sponge",
      description: "Blend makeup",
      price: "$4",
      imgUrl: "https://via.placeholder.com/150",
      featured: false
    },
    {
      name: "Makeup Brushes",
      description: "Apply makeup",
      price: "$20",
      imgUrl: "https://via.placeholder.com/150",
      featured: true
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