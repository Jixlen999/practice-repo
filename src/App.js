import axios from "axios";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    await axios.get("https://localhost:7103/notes").then(({ data }) => {
      setNotes(data.notes);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
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
