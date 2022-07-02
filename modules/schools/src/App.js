import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { extendTheme } from "native-base";
import { DEFAULT_THEME, AppShell } from "@shiksha/common-lib";
import SchoolProfile from "pages/SchoolProfile";
import Recommendedschools from "./pages/Recommended-schools";
import Allocatedschools from "./pages/Allocated-schools";

function App() {
  const theme = extendTheme(DEFAULT_THEME);
  const routes = [
    {
      path: "school-profile",
      component: SchoolProfile,
    },
    {
      path: "recommended-schools",
      component: Recommendedschools,
    },
    {
      path: "allocated-schools",
      component: Allocatedschools,
    },
    {
      path: "*",
      component: SchoolProfile,
    },
  ];
  const LoginComponent = React.lazy(() => import("core/Login"));

  return (
    <AppShell theme={theme} routes={routes} AuthComponent={LoginComponent} />
  );
}

export default App;
