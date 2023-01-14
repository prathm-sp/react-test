import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./style.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
  Switch,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import { visuallyHidden } from "@mui/utils";

function createData(group, clicks, cost, conversions, revenue) {
  return {
    group,
    clicks,
    cost,
    conversions,
    revenue,
  };
}

const rows = [
  createData("Male", 348, 12528, 42, 62118),
  createData("Female", 348, 12528, 42, 62118),
  createData("Unknown", 348, 12528, 42, 62118),
  createData("Total", 1145, 41383, 80, 71782),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "group",
    numeric: false,
    disablePadding: true,
    label: "Group",
  },
  {
    id: "clicks",
    numeric: true,
    disablePadding: false,
    label: "Clicks",
  },
  {
    id: "cost",
    numeric: true,
    disablePadding: false,
    label: "Cost",
  },
  {
    id: "conversions",
    numeric: true,
    disablePadding: false,
    label: "Conversions",
  },
  {
    id: "revenue",
    numeric: true,
    disablePadding: false,
    label: "Revenue",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              <span className="table-head-content">{headCell.label}</span>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const Chart = () => {
  const COLORS = ["#ff823c", "#0096ff", "#323c46"];
  const data = [
    { name: "Male", value: 400 },
    { name: "Female", value: 350 },
    { name: "Unknown", value: 250 },
  ];
  const [isChartView, setIsChartView] = useState(true);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;
  const toggleView = () => setIsChartView((p) => !p);

  return (
    <div className="chart-container">
      <div className="toolbar">
        <p className="toolbar-title">Ad Insights</p>
        <HelpOutlineIcon color="disabled" />
      </div>
      {isChartView ? (
        <div className="chart-sub-container">
          <PieChart className="pie-chart-container" width={350} height={400}>
            <Pie
              data={data}
              color="#000000"
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              innerRadius={100}
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
              <p>40% Male</p>
            </div>
            <div className="statistic statistic-blue">
              <div />
              <p>35% Female</p>
            </div>
            <div className="statistic statistic-black">
              <div />
              <p>25% Unknown</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
            const isItemSelected = isSelected(row.name);
            const labelId = `enhanced-table-checkbox-${index}`;

            return (
              <TableRow
                hover
                onClick={(event) => handleClick(event, row.name)}
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.name}
                selected={isItemSelected}
              >
                <TableCell id={labelId} scope="row" padding="none">
                  <span className="table-content">{row.group}</span>
                </TableCell>
                <TableCell align="center">
                  <span className="table-content">{row.clicks}</span>
                </TableCell>
                <TableCell align="center">
                  <span className="table-content">USD {row.cost}</span>
                </TableCell>
                <TableCell align="center">
                  <span className="table-content">{row.conversions}</span>
                </TableCell>
                <TableCell align="center">
                  <span className="table-content">USD {row.revenue}</span>
                </TableCell>
              </TableRow>
            );
          })}
        </div>
      )}
      <div className="switch-btn">
        <Switch onClick={toggleView} checked={isChartView} />
      </div>
    </div>
  );
};

export default Chart;
