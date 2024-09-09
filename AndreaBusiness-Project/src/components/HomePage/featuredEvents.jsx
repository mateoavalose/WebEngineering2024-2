import React from 'react';
import { EventCard } from '../FashionEvents/EventCard';

export const FeaturedEvents = () => {
    const events =  [
        {
          id: 1,
          text: "Event 1",
          start: "2024-09-02",
          end: "2024-09-05",
          backColor: "#d5663e",
          imgUrl: "https://via.placeholder.com/150",
          featured: true,
        },
        {
          id: 2,
          text: "Event 2",
          start: "2024-09-06",
          end: "2024-09-07",
          backColor: "#ecb823",
          imgUrl: "https://via.placeholder.com/150",
          featured: false,
        },
        {
          id: 3,
          text: "Event 3",
          start: "2024-09-16",
          end: "2024-09-17",
          backColor: "#6aa84f",
          imgUrl: "https://via.placeholder.com/150",
          featured: false,
        },
        {
          id: 4,
          text: "Event 4",
          start: "2024-09-20",
          end: "2024-09-22",
          backColor: "#3d85c6",
          imgUrl: "https://via.placeholder.com/150",
          featured: true,
        },
        {
          id: 5,
          text: "Event 5",
          start: "2024-09-25",
          end: "2024-09-26",
          imgUrl: "https://via.placeholder.com/150",
          featured: false,
        },
      ];

    const featuredEvents = events.filter((event) => event.featured);
    
    return (
        <section className="featured-events">
        <h2>Featured Events</h2>
        <div className="featured-events-grid">
            {featuredEvents.map((event, index) => (
            <EventCard key={index} {...event} />
            ))}
        </div>
        </section>
    )
}