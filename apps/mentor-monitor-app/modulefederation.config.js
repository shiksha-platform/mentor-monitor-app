const { dependencies } = require("./package.json");

module.exports = {
  name: "mentor_monitor_app",
  exposes: {
    "./App": "./src/App.js",
  },
  remotes: {
    core: `core@[window.appModules.core.url]/moduleEntry.js`,
    schools: `schools@[window.appModules.schools.url]/moduleEntry.js`,
    visits: `visits@[window.appModules.visits.url]/moduleEntry.js`,
  },
  filename: "moduleEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
