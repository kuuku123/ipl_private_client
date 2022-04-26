import MatchDetailCard from "components/MatchDetailCard";
import MatchSmallCard from "components/MatchSmallCard";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";
import { StringLiteralType } from "typescript";

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
    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(
                "http://localhost:8080/team/Chennai Super Kings"
            );
            const data = await response.json();
            setTeam(data);
            console.log(data);
        };
        fetchMatches();
    },[]);

    return !team ? null: (
        <div className="TeamPage">
            <h1>{team!.teamName}</h1>
            <MatchDetailCard match={team.league_matches[0]} />
            {team.league_matches.slice(1).map(match => <MatchSmallCard match={match} key={match.id}/>)}
        </div>
    );
};

export default TeamPage;
