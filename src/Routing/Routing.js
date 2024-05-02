import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Counter from "../Redux/Components/Counter";
// import signUp from "../Redux/Actions/authAction";

const Routing = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="" element={<Counter />} /> */}
        <Route path="" element={<Counter />} />
        {/* <Route path="" element={<signUp />} /> */}
      </Routes>
    </Router>
  );
};

export default Routing;
