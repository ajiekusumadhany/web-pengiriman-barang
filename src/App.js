import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Login from "./Auth/Login.jsx";
import Register from "./Auth/Register.jsx";
import CheckShippingCostsPage from "./pages/CheckShippingCostsPage.jsx";
import CallCenter from "./pages/CallCenter.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import TrackingPage from "./pages/TrackingPage.jsx";
import OrderPage from "./dashboard/OrderPage.jsx";
import SettingsPage from "./dashboard/SettingsPage.jsx";
import UserListPage from "./dashboard/UserListPage.jsx";
import OrderListPage from "./dashboard/OrderListPage.jsx";
import MyProfilePage from "./dashboard/MyProfilePage.jsx";
import AddAdmin from "./dashboard/AddAdmin.jsx";
import TrackingPageDashboard from "./dashboard/TrackingPageDashboard.jsx";
import Dashboard from "./dashboard/DashboardPage.jsx";
import Unauthorized from "./dashboard/Unauthorized.jsx";
import ProtectedRoute from "./Auth/ProtectedRoute.jsx";
import SupportCenter from "./pages/SupportCenter.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shipping-rates" element={<CheckShippingCostsPage />} />
          <Route path="/call-center" element={<CallCenter />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/support-center" element={<SupportCenter />} />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                element={Dashboard}
                roles={["user", "admin", "superadmin"]}
              />
            }
          />

          <Route
            path="/dashboard/order"
            element={<ProtectedRoute element={OrderPage} roles={["user"]} />}
          />
          <Route
            path="/dashboard/settings"
            element={
              <ProtectedRoute
                element={SettingsPage}
                roles={["user", "admin", "superadmin"]}
              />
            }
          />
          <Route
            path="/dashboard/user-list"
            element={
              <ProtectedRoute
                element={UserListPage}
                roles={["admin", "superadmin"]}
              />
            }
          />
          <Route
            path="/dashboard/order-list"
            element={
              <ProtectedRoute
                element={OrderListPage}
                roles={["admin", "superadmin"]}
              />
            }
          />
          <Route
            path="/dashboard/add-admin"
            element={
              <ProtectedRoute element={AddAdmin} roles={["superadmin"]} />
            }
          />
          <Route
            path="/dashboard/myprofile"
            element={
              <ProtectedRoute
                element={MyProfilePage}
                roles={["user", "admin", "superadmin"]}
              />
            }
          />
          <Route
            path="/dashboard/tracking"
            element={
              <ProtectedRoute
                element={TrackingPageDashboard}
                roles={["user"]}
              />
            }
          />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
