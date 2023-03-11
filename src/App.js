import 'babel-polyfill';
import React, { useState } from "react";
import SqareGrid from "./SquareGrid";
import SqareGrid2 from "./SquareGrid2";
import ExampleComponent from "./ExampleComponent";

function App() {
  const [showResults, setShowResults] = useState(false);

  const handleSearchTeam = (e) => {
    console.log(e.target.value.toLowerCase());

    let team = e.target.value.toLowerCase();

    if (team === "tiger") {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <div>
      <ExampleComponent />
      {/* <SqareGrid /> */}
      <div className="find-team-div">
        <span className="find-team-span">Compare Team</span>
        <input type="text" className="find-team-search" onChange={handleSearchTeam} />
      </div>
      {showResults ? <SqareGrid2 /> : null}
    </div>
  );
}

export default App;
