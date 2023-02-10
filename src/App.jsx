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
import ProductSettings from "./views/ProductSettings";
import AddProduct from "./views/AddProduct";
import SalesSettings from "./views/SalesSettings";
import ReservationInquiry from "./views/ReservationInquiry";
import LuckyDraw from "./views/LuckyDraw";
import PerformanceDataInquiry from "./views/PerformanceDataInquiry";
import LMSSeetings from "./views/LMSSeetings";

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
          <Route
            exact
            path="/product-management/product-settings"
            element={<ProductSettings />}
          />
          <Route
            exact
            path="/product-management/add-product"
            element={<AddProduct />}
          />
          <Route
            exact
            path="/product-management/sales-settings"
            element={<SalesSettings />}
          />
          <Route
            exact
            path="/product-management/reservation-inquiry"
            element={<ReservationInquiry />}
          />
          <Route
            exact
            path="/product-management/lucky-draw"
            element={<LuckyDraw />}
          />
          <Route
            exact
            path="/product-management/performance-data-inquiry"
            element={<PerformanceDataInquiry />}
          />
          <Route
            exact
            path="/product-management/lms-settings"
            element={<LMSSeetings />}
          />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
