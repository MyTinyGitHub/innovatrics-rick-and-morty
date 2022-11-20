import {
  Maybe,
  useFetchRickAndMortyCharacterQuery,
} from "../../generated/graphql";

import "./Details.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Tag from "../Tag";
import { useTranslation } from "react-i18next";
import { language } from "../../App";
import {} from "react-router-dom";

interface Props {
  id: string;
}

const Detail = () => {
  const { id } = useParams();
  const [translation] = useTranslation();
  const navigate = useNavigate();
  const variables = {
    id: id as unknown as string,
  };

  const [character] = useFetchRickAndMortyCharacterQuery({ variables });
  return (
    <>
      <div className="details">
        <div className="back-button">
          <h6>
            <button onClick={() => navigate(-1)} className="btn default back">
              <img
                className="back-icon"
                src={require("../../pictures/back.png")}
              ></img>
              {translation("buttons.back", { lng: language }).toUpperCase()}
            </button>
          </h6>
        </div>

        <div className="picture">
          <img src={character.data?.character?.image!}></img>
        </div>

        <div className="personal-info">
          <div className="name-status">
            <h2>{character.data?.character?.name + "  "}</h2>
            <Tag text={character.data?.character?.status!} />
          </div>
          <ul>
            <li className="gender">{character.data?.character?.gender}</li>
            <li className="species">{character.data?.character?.species}</li>
            <li className="origin">
              {character.data?.character?.origin?.name}
            </li>
            <li className="location">
              {character.data?.character?.location?.name}
            </li>
          </ul>
        </div>

        <div className="episodes">
          <h6>
            EPISODES &nbsp;
            <p className="badge bg-primary">
              {character.data?.character?.episode.length}
            </p>
          </h6>
        </div>
        <div className="list-of-episodes">
          {character.data?.character?.episode.map((episode) => {
            return episode?.name + ", ";
          })}
        </div>
      </div>
    </>
  );
};

export default Detail;
