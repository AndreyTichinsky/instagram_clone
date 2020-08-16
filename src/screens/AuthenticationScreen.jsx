import React from "react";
import { Link } from "react-router-dom";

export const AuthenticationScreen: React.FC<{}> = () => {
  return (
    <div>
      <Link to="/auth">Authorization</Link>
    </div>
  );
};
