import MatchDetailCard from "components/MatchDetailCard";
import MatchSmallCard from "components/MatchSmallCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./scss/TeamPage.scss";
import { PieChart } from "react-minimal-pie-chart";
import { storiesOf } from '@storybook/react';

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
                <div className="team-name-section">
                    <h1 className="team-name">{team!.teamName}</h1>
                </div>
                <div className="win-loss-section">
                    Wins / Losses
                    <PieChart
                        data={[
                            { title: "Loss", value: team.totalMatches-team.totalWins, color: "#a34d5d" },
                            { title: "Win", value: team.totalWins, color: "#4da375" },
                        ]}
                    />
                </div>
                <div className="match-detail-section">
                    <h3>Latest Matches</h3>
                    <MatchDetailCard
                        match={team!.league_matches[0]}
                        teamName={team.teamName}
                    />
                </div>
                {team!.league_matches.slice(1).map((match) => (
                    <MatchSmallCard
                        key={match.id}
                        match={match}
                        teamName={team.teamName}
                    />
                ))}
                <div className="more-link">
                    <a href="#">More {">"} </a>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default TeamPage;
