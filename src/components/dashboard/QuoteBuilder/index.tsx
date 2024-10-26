import React from "react";

export const QuoteBuilder: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="card p-4">
        <h2 className="text-xl font-semibold mb-4">Service Configuration</h2>
        <p className="text-gray-400">Configure your service options here.</p>
      </div>

      <div className="card p-4">
        <h2 className="text-xl font-semibold mb-4">Cost Summary</h2>
        <p className="text-gray-400">View your cost breakdown here.</p>
      </div>

      <div className="card p-4">
        <h2 className="text-xl font-semibold mb-4">Additional Services</h2>
        <p className="text-gray-400">Add extra services here.</p>
      </div>
    </div>
  );
};
