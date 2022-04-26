import MatchDetailCard from "components/MatchDetailCard";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setTokenSourceMapRange } from "typescript";
import TeamPage, { Match } from "./TeamPage";

const MacthPage = () => {
    const [matches, setMatches] = useState<Match[]>();
    const { teamName } = useParams();
    const { year } = useParams();
    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(
                `http://localhost:8080/team/${teamName}/matches/?year=${year}`
            );
            const data = await response.json();
            console.log(data);
            setMatches(data);
        };
        fetchMatches();
    }, []);
    return (
        <div>
            <h1>Match Page</h1>
            {matches?.map((match) => (
                <MatchDetailCard key={match.id} teamName={teamName!} match={match} />
            ))}
        </div>
    );
};

export default MacthPage;
