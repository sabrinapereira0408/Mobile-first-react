import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.css";

import Routes from "./routes";

import "./css/dashboard.css";

function App() {
  return (
    <Provider store={store}>
      <Routes />
      {/* <Sidebar/>
            <Usuarios/> */}
    </Provider>

    // // <header className="App-header">
    // //   <img src={logo} className="App-logo" alt="logo" />
    // // </header>
  );
}

export default App;
