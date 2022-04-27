import { Match } from "../pages/TeamPage";
import { Link } from "react-router-dom";
import "./scss/MatchSmallCard.scss";

interface Prop {
    match: Match;
    teamName: string;
}
const MatchSmallCard = ({ match, teamName }: Prop) => {
    if (!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    const isMatchWon = teamName === match.matchWinner;
    return (
        <div
            className={
                isMatchWon
                    ? "MatchSmallCard won-card"
                    : "MatchSmallCard lost-card"
            }
        >
            <span className="vs">vs</span>
            <h1>
                <Link to={otherTeamRoute}> {otherTeam}</Link>
            </h1>
            <p className="match-result">
                {match.matchWinner} won by {match.resultMargin} {match.result}
            </p>
        </div>
    );
};

export default MatchSmallCard;
