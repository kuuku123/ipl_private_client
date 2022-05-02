import React from "react";
import { Link } from "react-router-dom";
import "./scss/YearSelector.scss";

interface Props {
    teamName: string;
}

const YearSelector = ({ teamName }: Props) => {
    let years = [];
    const startYear = parseInt(process.env.REACT_APP_DATA_START_YEAR!, 10);
    const endYear = parseInt(process.env.REACT_APP_DATA_END_YEAR!, 10);

    for (let i = startYear; i <= endYear; i++) {
        years.push(i);
    }

    return (
        <ol className="YearSelector">
            {years.map((year) => (
                <li key={year}>
                    <Link to={`/teams/${teamName}/matches/${year}`}>
                        {year}
                    </Link>
                </li>
            ))}
        </ol>
    );
};

export default YearSelector;
