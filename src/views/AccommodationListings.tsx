import React from "react";

const AccommodationListings = () => {
  const accommodations = [
    {
      id: 1,
      name: "Green Apartments",
      location: "Kigali",
      price: "$200/month",
    },
    {
      id: 2,
      name: "Blue Villas",
      location: "Kigali Heights",
      price: "$300/month",
    },
  ];

  return (
    <div>
      <h1>Accommodation Listings</h1>
      <ul>
        {accommodations.map((accommodation) => (
          <li key={accommodation.id}>
            <h2>{accommodation.name}</h2>
            <p>{accommodation.location}</p>
            <p>{accommodation.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccommodationListings;
