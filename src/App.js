import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Components/Layout/Index";
import PageRoutes from "./Routes/Index";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Layout>
        <PageRoutes />
      </Layout>
    </Router>
  );
}

export default App;
