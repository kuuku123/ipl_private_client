import {Match} from "../pages/TeamPage";

interface Prop{
    match: Match
}
const MatchSmallCard = ({match} : Prop) => {
  return (
      <div className="MatchSmallCard">
          <p>{match.team1} vs {match.team2}</p>
      </div>
  )
}

export default MatchSmallCard