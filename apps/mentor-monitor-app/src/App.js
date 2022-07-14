import React from "react";

import "./App.css";
import { extendTheme } from "native-base";
import { DEFAULT_THEME, AppShell } from "@shiksha/common-lib";
import Home from "pages/Home";

function App() {
  const theme = extendTheme(DEFAULT_THEME);
  const Question = React.lazy(() => import("schools/Question"));
  const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/schools/questionnaire",
      component: Question,
    },
    {
      path: "*",
      component: Home,
    },
  ];
  const LoginComponent = React.lazy(() => import("core/Login"));

  return (
    <AppShell
      theme={theme}
      basename={process.env.PUBLIC_URL}
      routes={routes}
      AuthComponent={LoginComponent}
      isShowFooterLink={true}
      appName="Mentor/Monitor App"
    />
  );
}

export default App;
