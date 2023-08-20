import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
      <Routes>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<AboutPage />} path="/about" exact />
          <Route element={<ContactPage />} path="/contact" exact />
          <Route element={<Projects />} path="/projects" exact />
        </Routes>
    </Router>
  );
}

export default App;

