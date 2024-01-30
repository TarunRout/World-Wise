import React from "react";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <PageNav />
      <h1 className="test">WorldWise</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}
