import { Character, Maybe } from "../../generated/graphql";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TableBody.css";
import { Link } from "react-router-dom";
import Tag from "../Tag";

interface Props {
  tableData: Character[] | undefined | any;
  displayed: number;
}
const TableBody: React.FC<Props> = ({ tableData, displayed }) => {
  return (
    <tbody className="tableBody">
      {tableData?.slice(0, displayed).map((data: Character) => {
        return (
          <tr key={data.id} className="tableRow">
            <td key="name">
              <img src={data?.image || ""} className="coverImage" />
              {" " + data.name}
            </td>
            <td key="status">
              <Tag text={data.status!}></Tag>
            </td>
            <td key="gender">{data.gender}</td>
            <td key="species">{data.species}</td>
            <td key="created">
              {data.created?.split("T")[0].split("-").reverse().join(".")}
            </td>
            <td key="origin">
              {data.origin?.name === "unknown" ? (
                <Tag text="unknown" />
              ) : (
                data.origin?.name
              )}
            </td>
            <td key="detail">
              <Link to={"/detail/" + data.id}>Link</Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
