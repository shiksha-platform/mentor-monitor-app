import React from "react";
import "./App.css";

// Shared Login Component
import Login from "pages/Login";

// Theme Provider
import { extendTheme, NativeBaseProvider } from "native-base";

// Routes Provider
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Shiksha Default Theme
import { DEFAULT_THEME } from "@shiksha/common-lib";

// For translation
import { initializeI18n } from "@shiksha/common-lib";
initializeI18n(["translation", "core"]);

const theme = extendTheme(DEFAULT_THEME);

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </NativeBaseProvider>
  );
}

export default App;
