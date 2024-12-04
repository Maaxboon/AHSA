import React from "react";

export default function MyListings() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sample Data */}
        <div className="border rounded shadow p-4">
          <h2 className="text-xl font-semibold">My Apartment</h2>
          <p>Location: Kigali</p>
          <p>Price: 450/month</p>
        </div>
      </div>
    </div>
  );
}
