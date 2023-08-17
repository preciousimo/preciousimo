import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
      <Routes>
          {/* <Route path="/" exact component={HomePage} />
          <Route path="/contact" component={ContactPage} /> */}
          <Route element={<HomePage />} path="/" exact />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ContactPage />} path="/contact" exact />
          <Route element={<Projects />} path="/projects" exact />
        </Routes>
    </Router>
  );
}

export default App;

