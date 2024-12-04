import React from "react";

export default function Signup() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="border px-4 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="border px-4 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="border px-4 py-2 rounded"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
