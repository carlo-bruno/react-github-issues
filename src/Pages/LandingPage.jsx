import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Link to="/issues">
        <button>Go to Issues</button>
      </Link>
    </div>
  );
};

export default LandingPage;
