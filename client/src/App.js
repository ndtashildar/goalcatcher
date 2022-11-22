import React, { Suspense } from "react";
import "./app/styles/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./app/containers/Navbar";
import Footer from "./app/components/Footer";
import Loading from "./app/components/Loading";

const Landing = React.lazy(() => import("./app/routes/Landing"));

const App = (props) => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
          <Suspense fallback={<Loading />}>
              <Routes>
                <Route exact path="/" {...props} element={<Landing/>} />
              </Routes>
          </Suspense>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;