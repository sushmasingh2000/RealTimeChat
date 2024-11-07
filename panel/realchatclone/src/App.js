import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/login";
import Registration from "./component/Registration";

function App() {
  return (
    <Router> {/* Wrap the Routes inside the Router */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
