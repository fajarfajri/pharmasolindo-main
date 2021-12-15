import React, { useRef } from "react";
import "@fontsource/rubik";

import { Switch, Route, useHistory } from "react-router-dom";

import Home from "./pages";
import Profile from "./pages/profile";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  let history = useHistory();

  /* HOME REFS */
  const productRef = useRef(null);
  const contactRef = useRef(null);

  /* PROFILE REFS */
  const businessRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const historyRef = useRef(null);
  const teamRef = useRef(null);

  const scrollSmoothHandler = (ref) => {
    try {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (e) {
      history.push("/");
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-rubik">
      <Navbar homeRefs={{ productRef, contactRef }} scrollSmoothHandler={scrollSmoothHandler} />
      <main className="flex-1">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home {...{ productRef, contactRef, scrollSmoothHandler }} />}
          />
          <Route
            exact
            path="/profil"
            component={() => (
              <Profile
                profileRefs={{ businessRef, visionRef, valuesRef, historyRef, teamRef }}
                scrollSmoothHandler={scrollSmoothHandler}
              />
            )}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
