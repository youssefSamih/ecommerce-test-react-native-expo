import React from "react";
import Routes from "./src/routes";
import { Provider } from "react-redux";
import store from "./src/store";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <>
      <StatusBar />
      <Provider {...{ store }}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
