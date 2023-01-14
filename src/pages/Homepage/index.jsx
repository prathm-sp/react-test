import Table from "../../components/Table";
import Chart from "../../components/Chart";
import React from "react";
import "./style.css";

function HomePage() {
  return (
    <div className="home-container">
      <Table />
      <Chart />
    </div>
  );
}

export default HomePage;
