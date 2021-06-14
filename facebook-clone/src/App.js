import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

const App = () => {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  return (
      <div className="app">
          { !user ? (
              <Login />
          ):(
          <div>
              <Header />
              <div className="body">
                  <Sidebar />
                  <Feed />
                  <Widgets />
              </div>
          </div>
          )}
      </div>
  );
}

export default App;