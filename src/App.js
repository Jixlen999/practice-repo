import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    try {
      const response = await axios.get("https://localhost:7103/notes");
      setNotes(response.data.notes);
    } catch (error) {
      console.error("Notes error:", error);
    }
  };

  return (
    <div>
      <header>
        <button onClick={getNotes}>get notes</button>
        <div>
          {notes.map(({ title }, index) => (
            <div key={index}>
              {index + 1}. {title}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
