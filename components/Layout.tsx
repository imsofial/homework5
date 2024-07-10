import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { PropsWithChildren } from "react";


const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className ="body">
    <header>
      <Header />
      </header>
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
    </div>
  );
};

export default Layout;
