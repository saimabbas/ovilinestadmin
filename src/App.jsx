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
import AdminID from "./views/AdminID";
import AddAdminID from "./views/AddAdminID";
import RoadmapManagement from "./views/RoadmapManagement";
import AddRoadmap from "./views/AddRoadmap";
import FAQSettings from "./views/FAQSettings";
import AddFAQ from "./views/AddFAQ";
import TermsOfUseSettings from "./views/TermsOfUseSettings";
import AddTermsOfUse from "./views/AddTermsOfUse";
import PrivacyPolicySettings from "./views/PrivacyPolicySettings";
import AddPrivacyPolicy from "./views/AddPrivacyPolicy";
import ComplexDetailsSettings from "./views/ComplexDetailsSettings";
import AddComplexDetails from "./views/AddComplexDetails";
import RoomDetailsSettings from "./views/RoomDetailsSettings";
import AddRoomDetails from "./views/AddRoomDetails";

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
          <Route exact path="/admin-id-management" element={<AdminID />} />
          <Route exact path="/add-admin-id" element={<AddAdminID />} />
          <Route
            exact
            path="/roadmap-management"
            element={<RoadmapManagement />}
          />
          <Route exact path="/add-roadmap" element={<AddRoadmap />} />
          <Route exact path="/faq-settings" element={<FAQSettings />} />
          <Route exact path="/add-faq" element={<AddFAQ />} />
          <Route
            exact
            path="/terms-of-use-settings"
            element={<TermsOfUseSettings />}
          />
          <Route
            exact
            path="/add-to-terms-of-use"
            element={<AddTermsOfUse />}
          />
          <Route
            exact
            path="/privacy-policy-settings"
            element={<PrivacyPolicySettings />}
          />
          <Route
            exact
            path="/add-privacy-policy"
            element={<AddPrivacyPolicy />}
          />
          <Route
            exact
            path="/complex-details-settings"
            element={<ComplexDetailsSettings />}
          />
          <Route
            exact
            path="/add-complex-details"
            element={<AddComplexDetails />}
          />
          <Route
            exact
            path="/room-details-settings"
            element={<RoomDetailsSettings />}
          />
          <Route exact path="/add-room-details" element={<AddRoomDetails />} />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
