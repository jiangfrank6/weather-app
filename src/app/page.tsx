'use client';

import { useState } from 'react';

export default function Home() {
  const [city, setCity] = useState('');

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Weather Forecast</h1>
        <p className="text-gray-600">
          Get real-time weather updates for any city around the world
        </p>
      </div>
      
      <div className="max-w-md mx-auto">
        <div className="flex gap-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
