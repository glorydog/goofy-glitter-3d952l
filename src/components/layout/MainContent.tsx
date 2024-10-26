import React from "react";
import { QuoteBuilder } from "../dashboard/QuoteBuilder/index";

export const MainContent: React.FC = () => {
  return (
    <main className="main-content p-6">
      <QuoteBuilder />
    </main>
  );
};
