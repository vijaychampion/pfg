import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const Home = lazy(() => import("../Pages/Home"));
const Education = lazy(() => import("../Pages/Education"));
const EngagementSocial = lazy(() => import("../Pages/EngagementSocial"));
const Environment = lazy(() => import("../Pages/Environment"));
const Aidants = lazy(() => import("../Pages/Aidants"));
const Culture = lazy(() => import("../Pages/Culture"));
const TermsOfUse = lazy(() => import("../Pages/TermsOfUse"));
const PrivacyPolicy = lazy(() => import("../Pages/PrivacyPolicy"));

function PageRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/engagement-social" element={<EngagementSocial />} />
        <Route path="/environment" element={<Environment />} />
        <Route path="/aidants" element={<Aidants />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Suspense>
  );
}

export default PageRoutes;
