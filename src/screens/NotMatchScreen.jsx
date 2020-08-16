import React from "react";
import { Link } from "react-router-dom";

export const NotMatchScreen: React.FC<{}> = () => {
  return (
    <div>
      <Link to="/">Back to homepage</Link>
    </div>
  );
};
