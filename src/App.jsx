import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import NFTList from "./views/NFTList";
import ClaimInformationInquiry from "./views/ClaimInformationInquiry";

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
import NFTTransferInquiry from "./views/NFTTransferInquiry";
import QueryClaimStatistics from "./views/QueryClaimStatistics";

function App() {
  return (
    <>
      <Switch>
        <ScrollToTop />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/nft-list" element={<NFTList />} />
          <Route
            exact
            path="/claim-information-inquiry"
            element={<ClaimInformationInquiry />}
          />
          <Route
            exact
            path="/nft-transfer-inquiry"
            element={<NFTTransferInquiry />}
          />
          <Route
            exact
            path="/query-claim-statistics"
            element={<QueryClaimStatistics />}
          />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
