import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./authentication/login";
import Registration from "./authentication/Registration";
import Home from "./component/Home";

function App() {
  return (
    <Router> {/* Wrap the Routes inside the Router */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
