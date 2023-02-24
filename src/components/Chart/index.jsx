import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./style.css";
import Toolbar from "../Toolbar";
import SwitchButton from "../SwitchButton";
import Table from "../Table";

const tableData = [
  {
    id: 1,
    group: "Male",
    clicks: 348,
    cost: 12528,
    conversions: 42,
    revenue: 62118,
  },
  {
    id: 2,
    group: "Female",
    clicks: 692,
    cost: 24912,
    conversions: 35,
    revenue: 5175,
  },
  {
    id: 3,
    group: "Unknown",
    clicks: 105,
    cost: 3943,
    conversions: 3,
    revenue: 4489,
  },
  {
    id: 4,
    group: "Total",
    clicks: 1145,
    cost: 41383,
    conversions: 80,
    revenue: 71782,
  },
];

const columns = [
  { label: "Group", accessor: "group", sortable: true },
  { label: "Clicks", accessor: "clicks", sortable: true },
  { label: "Cost", accessor: "cost", sortable: true },
  { label: "Conversions", accessor: "conversions", sortable: true },
  { label: "Revenue", accessor: "revenue", sortable: true },
];

const Chart = () => {
  const COLORS = ["#ff823c", "#0096ff", "#323c46"];
  const [data, setData] = useState([
    { name: "Male", value: 348 },
    { name: "Female", value: 692 },
    { name: "Unknown", value: 105 },
  ]);
  const [isChartView, setIsChartView] = useState(true);
  const [activeDataId, setActiveDataId] = useState("clicks");

  const toggleView = () => setIsChartView((p) => !p);

  const onChange = (e) => {
    setActiveDataId(e.target.value);
    const _data = [
      { name: "Male", value: tableData[0][e.target.value] },
      { name: "Female", value: tableData[1][e.target.value] },
      { name: "Unknown", value: tableData[2][e.target.value] },
    ];
    setData(_data);
  };

  const getMaleStats = () => {
    return ((data[0].value / tableData[3][activeDataId]) * 100).toFixed();
  };

  const getFeMaleStats = () => {
    return ((data[1].value / tableData[3][activeDataId]) * 100).toFixed();
  };

  const getUnknownStats = () => {
    return ((data[2].value / tableData[3][activeDataId]) * 100).toFixed();
  };

  return (
    <div className="chart-container">
      {isChartView ? (
        <>
          <Toolbar
            value={activeDataId}
            onChange={onChange}
            showDropDown={true}
          />
          <div className="chart-sub-container">
            <PieChart className="pie-chart-container" width={350} height={363}>
              <Pie
                isAnimationActive={false}
                data={data}
                color="#000000"
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={140}
                innerRadius={80}
                fill="#8884d8"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <div>
              <div className="statistic statistic-orange">
                <div />
                <p>{getMaleStats()}% Male</p>
              </div>
              <div className="statistic statistic-blue">
                <div />
                <p>{getFeMaleStats()}% Female</p>
              </div>
              <div className="statistic statistic-black">
                <div />
                <p>{getUnknownStats()}% Unknown</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Table data={tableData} columns={columns} />
      )}
      <div className="switch-btn">
        <SwitchButton pieChartView={isChartView} onClick={toggleView} />
      </div>
    </div>
  );
};

export default Chart;
