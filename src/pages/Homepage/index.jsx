import Table from "../../components/Table";
import Chart from "../../components/Chart";
import React from "react";
import "./style.css";
import tableData from "../../tableData.json";

const columns = [
  { label: "Campaigns", accessor: "campaigns", sortable: true },
  { label: "Clicks", accessor: "clicks", sortable: true },
  { label: "Cost", accessor: "cost", sortable: true },
  { label: "Conversions", accessor: "conversions", sortable: true },
  { label: "Revenue", accessor: "revenue", sortable: true },
];

function HomePage() {
  return (
    <div className="home-container">
      <div className="sub-container">
        <Table data={tableData} columns={columns} />
        <Chart />
      </div>
    </div>
  );
}

export default HomePage;
