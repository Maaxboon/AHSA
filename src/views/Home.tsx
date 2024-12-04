import React from "react";

export default function Home() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to ALU House Hunt</h1>
      <p className="text-lg mb-4">
        Your one-stop platform for finding the perfect accommodation in Kigali.
      </p>
      <div>
        <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </a>
        <a
          href="/signup"
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded">
          Signup
        </a>
      </div>
    </div>
  );
}
