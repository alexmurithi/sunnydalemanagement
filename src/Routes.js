import React, { lazy } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

// import MainLayout from "./Layouts/Main";
import DashboardLayout from "./Components/DashboardLayout";
import MainLayout from "./Layouts/MainLayout";
import MonitoringLayout from "./Layouts/MonitoringLayout";
import RealEstateLayout from "./Layouts/RealEstateLayout";

const LandingPage = lazy(() => import("./Pages/LandingPage"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const AdminLogin = lazy(() => import("./Pages/Auth/Login"));

const NotFound = lazy(() => import("./Pages/NotFound"));

const MonitoringDashboard = lazy(() =>
  import("./Components/Monitoring/Dashboard")
);
const EnvironmentalAudit = lazy(() =>
  import("./Components/Monitoring/EnvironmentalAudit")
);
const EnvironmentalConservation = lazy(() =>
  import("./Components/Monitoring/EnvironmentConservation")
);
const WasteDisposal = lazy(() =>
  import("./Components/Monitoring/WasteDisposal")
);
const ImpactAssessment = lazy(() =>
  import("./Components/Monitoring/ImpactAssessment")
);
const EnvironmentalResearch = lazy(() =>
  import("./Components/Monitoring/EnvironmentalResearch")
);
const WaternForest = lazy(() => import("./Components/Monitoring/WaternForest"));
const CapacityBuilding = lazy(() =>
  import("./Components/Monitoring/CapacityBuilding")
);

const AllPropertyItems = lazy(() =>
  import("./Components/RealEstate/AllPropertyItems")
);

const Dashboard = lazy(() => import("./Pages/Dashboard"));
const AdminPropManagement = lazy(() =>
  import("./Components/Admin/PropertyManagement")
);
const NewProperty = lazy(() =>
  import("./Components/Admin/PropertyManagement/New")
);
const AppRoutes = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />

      <Route
        path="/admin"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" />
          ) : (
            <Navigate to="/auth/login" />
          )
        }
      />

      <Route exact path="/" element={<MainLayout />}>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/auth/login" exact element={<AdminLogin />} />
      </Route>

      <Route
        exact
        path="/admin"
        element={
          isAuthenticated ? <DashboardLayout /> : <Navigate to="/auth/login" />
        }
      >
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route
          exact
          path="/property-management"
          element={<AdminPropManagement />}
        />
        <Route exact path="/new-property" element={<NewProperty />} />
      </Route>

      <Route
        exact
        path="/monitoring-and-evaluation"
        element={<MonitoringLayout />}
      >
        <Route exact path="" element={<MonitoringDashboard />} />
        <Route
          exact
          path="/environmental-audit"
          element={<EnvironmentalAudit />}
        />
        <Route
          exact
          path="/environmental-conservation-and-protection"
          element={<EnvironmentalConservation />}
        />
        <Route
          exact
          path="/environmental-research"
          element={<EnvironmentalResearch />}
        />
        <Route exact path="/impact-assessment" element={<ImpactAssessment />} />
        <Route
          exact
          path="/environmental-impact-and-assessment"
          element={<WasteDisposal />}
        />
        <Route
          exact
          path="/water-and-forest-resources"
          element={<WaternForest />}
        />
        <Route
          exact
          path="/public-capacity-building"
          element={<CapacityBuilding />}
        />
      </Route>

      <Route
        exact
        path="/real-estate-and-property-management"
        element={<RealEstateLayout />}
      >
        <Route exact path="" element={<AllPropertyItems />} />
        <Route exact path="/:id" element={<div>this</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
