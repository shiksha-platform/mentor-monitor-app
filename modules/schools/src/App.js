import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { extendTheme } from "native-base";
import { DEFAULT_THEME, AppShell } from "@shiksha/common-lib";
import SchoolProfile from "pages/SchoolProfile";
import Myvisitspage from "./pages/MyVisitsPage";

function App() {
  const theme = extendTheme(DEFAULT_THEME);
  const routes = [
    {
      path: "my-visits",
      component: Myvisitspage,
    },
    {
      path: "school-profile",
      component: SchoolProfile,
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
