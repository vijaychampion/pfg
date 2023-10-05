import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <main className="w-full h-full flex flex-col">
      <div className="flex-[1_0_auto]">
        <Header />
        <div>{children}</div>
      </div>

      <Footer />
    </main>
  );
}

export default Layout;
