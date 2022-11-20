import { Maybe } from "graphql/jsutils/Maybe";
import "./Tag.css";

interface Props {
  text: string;
}

const Tag: React.FC<Props> = ({ text }) => {
  const badgeForStatus = (status: Maybe<string> | undefined) => {
    if (status === undefined || status === null) {
      return "";
    }

    switch (status.toLowerCase()) {
      case "alive":
        return "badge alive";
      case "dead":
        return "badge dead";
      case "unknown":
        return "badge unknown";
      default:
        return "";
    }
  };
  if (!text) return <div>Loading....</div>;
  return (
    <div className="badge-parent">
      <span className={badgeForStatus(text) + " status"}>
        <div className={`status-image-${text}`} />
        {text.charAt(0).toUpperCase() + text.slice(1)}
      </span>
    </div>
  );
};

export default Tag;
