import MatchDetailCard from "components/MatchDetailCard";
import MatchSmallCard from "components/MatchSmallCard";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";
import { StringLiteralType } from "typescript";
import { useParams } from "react-router-dom";

export interface Match {
    id: number;
    city: string;
    date: Date;
    playerOfMatch: string;
    venue: string;
    team1: string;
    team2: string;
    tossWinner: string;
    tossDecision: string;
    matchWinner: string;
    result: string;
    resultMargin: string;
    umpire1: string;
    umpire2: string;
}
interface Team {
    id: number;
    teamName: string;
    totalMatches: number;
    totalWins: number;
    league_matches: Match[];
}

const TeamPage = () => {
    const [team, setTeam] = useState<Team>();
    const { teamName } = useParams();
    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(
                `http://localhost:8080/team/${teamName}`
            );
            const data = await response.json();
            setTeam(data);
        };
        fetchMatches();
    }, [teamName]);

    if (team) {
        console.log(team);
        if (team!.teamName == "no such team" || !team) {
            return <h1>Team not found</h1>;
        }

        return (
            <div className="TeamPage">
                <h1>{team!.teamName}</h1>
                <MatchDetailCard match={team!.league_matches[0]} teamName={team.teamName} />
                {team!.league_matches.slice(1).map((match) => (
                    <MatchSmallCard key={match.id} match={match} teamName={team.teamName} />
                ))}
            </div>
        );
    } else {
        console.log("what")
        return null;
    }
};

export default TeamPage;
