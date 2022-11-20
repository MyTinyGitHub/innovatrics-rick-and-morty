import {
  Character,
  useFetchRickAndMortyCharactersListQuery,
} from "../../generated/graphql";
import "./Table.css";

import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { language } from "../../App";
import { ColumnHeader } from "./IColumnHeader";

const columns: string[] = [
  "name",
  "status",
  "gender",
  "species",
  "created",
  "origin",
  "detail",
];

const Table: React.FC = () => {
  const [listQuery] = useFetchRickAndMortyCharactersListQuery();
  const [tableData, setTableData] = useState<Character[]>(
    listQuery.data?.characters?.results! as Character[]
  );
  const [count, setCount] = useState<number>(5);
  const [translation] = useTranslation();

  useEffect(() => {
    setTableData(listQuery.data?.characters?.results! as Character[]);
  }, [listQuery]);

  const columnHeader: ColumnHeader[] = columns.map((column) => {
    return {
      label: translation(`columns.${column}`, { lng: language }).toUpperCase(),
      accessor: column,
    };
  });

  const handleSorting = (accessor: string, sortOrder: string) => {
    if (tableData !== null) {
      const spread: Character[] = [...tableData!];

      const sorted = spread.slice(0, count).sort((a, b) => {
        return (
          compareCharactersBasedOn(a, b, accessor) *
          (sortOrder === "asc" ? 1 : -1)
        );
      });

      for (let i = 0; i < count; i++) {
        spread[i] = sorted[i];
      }

      setTableData(spread);
    }
  };

  const compareCharactersBasedOn = (
    a: Character,
    b: Character,
    accessor: string
  ) => {
    switch (accessor) {
      case "name":
        return a.name?.localeCompare(b.name!)!;
      case "status":
        return a.status?.localeCompare(b.status!)!;
      case "gender":
        return a.gender?.localeCompare(b.gender!)!;
      case "species":
        return a.species?.localeCompare(b.species!)!;
      case "created":
        return a.created?.localeCompare(b.created!)!;
      case "origin":
        return a.origin?.name?.localeCompare(b.origin?.name!)!;
    }
    return 0;
  };

  if (listQuery.fetching) return <div>Loading...</div>;
  if (listQuery.error)
    return <div>There was an error, please try again later</div>;

  return (
    <div className="table-container">
      <table className="table">
        <TableHead {...{ columnHeader, handleSorting }} />
        <TableBody displayed={count} tableData={tableData} />
      </table>
      <Button onClick={() => setCount(count + 5)}>
        {translation("buttons.more", { lng: language }).toUpperCase()}
      </Button>
    </div>
  );
};

export default Table;
