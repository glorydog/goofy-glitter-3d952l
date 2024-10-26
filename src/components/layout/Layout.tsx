import React from "react";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";

// Changed to default export
const Layout: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Layout;
