import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import {
  BrowserRouter as Switch,
  Routes,
  Route,
  Router,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Switch>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
