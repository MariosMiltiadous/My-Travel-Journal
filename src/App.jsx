import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Entry from "./components/Entry";
import CountryDescription from "./components/CountryDescription";
import entries from "./data/entries"; // Array of entries
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="entries-container">
                {entries.map((entry) => (
                  <Entry key={entry.id} {...entry} />
                ))}
              </div>
            }
          />
          <Route path="/country/:id" element={<CountryDescription />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
