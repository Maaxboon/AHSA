import React from "react";

export default function CompanyListings() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Company Listings</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Add New List
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/*Sample Data */}
        <div className="border rounded shadow p-4">
          <h2 className="text-xl font-semibold">My House 1</h2>
          <p>Location: Kimironko</p>
          <p>Price: $600/month</p>
        </div>
      </div>
    </div>
  );
}
