import MatchDetailCard from "components/MatchDetailCard";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { setTokenSourceMapRange } from "typescript";
import TeamPage, { Match } from "./TeamPage";
import "./scss/MatchPage.scss";
import YearSelector from "components/YearSelector";
import { match } from "assert";

const MatchPage = () => {
    const [matches, setMatches] = useState<Match[]>([]);
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
    }, [teamName, year]);
    return (
        <div className="MatchPage">
            <div className="year-selector">
                <h3>Select Year</h3>
                <YearSelector teamName={teamName!} />
            </div>
            <div>
                <h1 className="page-heading">{teamName} matches in {year}</h1>
                {matches?.length > 0 ? (
                matches?.map((match) => (
                    <MatchDetailCard
                        key={match.id}
                        teamName={teamName!}
                        match={match}
                    />
                ))
                ) : (
                    <h1 className="no-match-year">No match in year {year}</h1>
                )}
            </div>
            <h1>
                <Link to={`/`}>Home</Link>
            </h1>
        </div>
    );
};

export default MatchPage;
