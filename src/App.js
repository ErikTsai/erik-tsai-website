import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Project from "./pages/Project";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// ADD MOBILE FUNCTIONS IN THE FUTURE (NOT ENOUGH TIME RN)
// ADD MOBILE FUNCTIONS IN THE FUTURE (NOT ENOUGH TIME RN)
// ADD MOBILE FUNCTIONS IN THE FUTURE (NOT ENOUGH TIME RN)
// ADD MOBILE FUNCTIONS IN THE FUTURE (NOT ENOUGH TIME RN)
// ADD MOBILE FUNCTIONS IN THE FUTURE (NOT ENOUGH TIME RN)
// ADD MOBILE FUNCTIONS IN THE FUTURE (NOT ENOUGH TIME RN)
// ADD MOBILE FUNCTIONS IN THE FUTURE (NOT ENOUGH TIME RN)
// ADD MOBILE FUNCTIONS IN THE FUTURE (NOT ENOUGH TIME RN)
// ADD MOBILE FUNCTIONS IN THE FUTURE (NOT ENOUGH TIME RN)
// ADD MOBILE FUNCTIONS IN THE FUTURE (NOT ENOUGH TIME RN)
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/erik-tsai-website" exact Component={About} />
          <Route path="/projects" exact Component={Project} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
