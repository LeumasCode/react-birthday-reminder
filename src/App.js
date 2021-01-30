import { logDOM } from "@testing-library/react";
import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        {people.length} Birthdays Today
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
};

export default App;
