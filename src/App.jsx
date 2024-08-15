import "./App.css";
import React, { useState,useEffect } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Layout from "./Layout";
import { ThemeProvider } from "./contexts/theme.jsx";


const App = () => {

  const apiKey =  import.meta.env.VITE_API_KEY;
  const [progress, setProgress] = useState(0);
 

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout progress={progress} />}>
            <Route
              index
              element={
                <News
                  setProgress={setProgress}
                  pageSize={9}
                  country="in"
                  category="general"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              exact
              path="business"
              element={
                <News
                  setProgress={setProgress}
                  pageSize={9}
                  country="in"
                  category="business"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              exact
              path="entertainment"
              element={
                <News
                  setProgress={setProgress}
                  pageSize={9}
                  country="in"
                  category="entertainment"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              exact
              path="health"
              element={
                <News
                  setProgress={setProgress}
                  pageSize={9}
                  country="in"
                  category="health"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              exact
              path="science"
              element={
                <News
                  setProgress={setProgress}
                  pageSize={9}
                  country="in"
                  category="science"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              exact
              path="sports"
              element={
                <News
                  setProgress={setProgress}
                  pageSize={9}
                  country="in"
                  category="sports"
                  apiKey={apiKey}
                />
              }
            />
            <Route
              exact
              path="technology"
              element={
                <News
                  setProgress={setProgress}
                  pageSize={9}
                  country="in"
                  category="technology"
                  apiKey={apiKey}
                />
              }
            />
            <Route exact path="about" element={<About />} />
            <Route exact path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
