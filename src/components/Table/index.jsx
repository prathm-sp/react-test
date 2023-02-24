import { useSortableTable } from "../../utils/useSortableTable";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import "./style.css";
import Toolbar from "../Toolbar";

const Table = ({ data, columns }) => {
  const [tableData, handleSorting] = useSortableTable(data);
  return (
    <div className="table-container">
      <Toolbar />
      <div className="table-sub-container">
        <table cellSpacing={0} cellPadding={0} className="table">
          <TableHead {...{ columns, handleSorting }} />
          <TableBody {...{ columns, tableData }} />
        </table>
      </div>
    </div>
  );
};

export default Table;
