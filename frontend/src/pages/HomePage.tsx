import TeamTile from "components/TeamTile";
import React, { useEffect, useState } from "react";
import "./scss/HomePage.scss";
import { Team } from "./TeamPage";
const HomePage = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    useEffect(() => {
        const fetchAllTeams = async () => {
            const response = await fetch(`http://localhost:8080/team`);
            const data = await response.json();
            setTeams(data);
        }
        fetchAllTeams();
    }, []);

    return (
    <div className="HomePage">
        <div className="header-section">
            <h1 className="app-name">Tony IPL Dashboard</h1>
        </div>
        <div className="team-grid">
            {teams.map(team => {
                return <TeamTile key={team.id} teamName={team.teamName}/>
            })}
        </div>
    </div>
    )
};

export default HomePage;
