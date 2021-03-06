import React from "react";
import { Link } from "react-router-dom";
import "./scss/TeamTile.scss";
interface Props {
    teamName: string;
}
const TeamTile = ({ teamName }: Props) => {
    return (
        <div className="TeamTile">
            <h1>
                <Link to={`/teams/${teamName}`}>{teamName}</Link>
            </h1>
        </div>
    );
};

export default TeamTile;
