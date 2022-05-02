import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import internal from "stream";
import TeamPage from "pages/TeamPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MatchPage from "pages/MatchPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/teams/:teamName"
                        element={<TeamPage />}
                    ></Route>
                    <Route
                        path="/teams/:teamName/matches/:year"
                        element={<MatchPage />}
                    ></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
