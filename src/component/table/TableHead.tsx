import { useState } from "react";
import { ColumnHeader } from "./IColumnHeader";
import "./TableHead.css";

interface Props {
  columnHeader: ColumnHeader[];
  handleSorting: Function;
}
const TableHead: React.FC<Props> = ({ columnHeader, handleSorting }) => {
  const [sortField, setSortField] = useState<String>("");
  const [order, setOrder] = useState<String>("asc");

  const handleSortingChange = (accessor: String) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead className="table-head">
      <tr>
        {columnHeader.map(({ label, accessor }) => {
          return (
            <th
              className="header-cell"
              key={accessor}
              onClick={() => handleSortingChange(accessor)}
            >
              {label}
              <img
                className="sort-image"
                src={require(`../../pictures/sort-${
                  accessor === sortField && order === "asc" ? "asc" : "desc"
                }.png`)}
              ></img>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
