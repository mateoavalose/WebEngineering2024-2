import { PhotoCard } from "./PhotoCard";

export const Photo = () => {
  const photos = [
    {
      photographer: "John Doe",
      description: "A beautiful sunset",
      price: "$10",
      imgUrl: "https://via.placeholder.com/150"
    },
    {
      photographer: "Jane Doe",
      description: "A beautiful sunrise",
      price: "$5",
      imgUrl: "https://via.placeholder.com/150"
    },
    {
      photographer: "John Smith",
      description: "A beautiful mountain",
      price: "$15",
      imgUrl: "https://via.placeholder.com/150"
    },
    {
      photographer: "Jane Smith",
      description: "A beautiful river",
      price: "$7",
      imgUrl: "https://via.placeholder.com/150"
    },
    {
      photographer: "John Doe",
      description: "A beautiful forest",
      price: "$8",
      imgUrl: "https://via.placeholder.com/150"
    },
    {
      photographer: "Jane Doe",
      description: "A beautiful beach",
      price: "$6",
      imgUrl: "https://via.placeholder.com/150"
    }
  ];

  return (
    <section className="photo" id="photo">
      <div className="photo-grid">
        {
          photos.map((photo, index) => {
            return (
              <PhotoCard key={index} {...photo} />
            )
          })
        }
      </div>
    </section>
  )
}