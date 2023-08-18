import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
      <Routes>
          <Route element={<HomePage />} path="/"/>
          <Route element={<AboutPage />} path="/about"/>
          <Route element={<ContactPage />} path="/contact"/>
          <Route element={<Projects />} path="/projects" />
        </Routes>
    </Router>
  );
}

export default App;

