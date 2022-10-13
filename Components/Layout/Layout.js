import Navigation from "../Ui/Navigation";
import Footer from "../Ui/Footer";
import FooterTop from "../Ui/FooterTop";
import MobileMenu from "../Ui/MobileMenu";

import React from "react";

export default function Layout({ children, open, buttonHandler }) {
  return (
    <React.Fragment>
      <Navigation open={open} buttonHandler={buttonHandler} />
      {open ? (
        <MobileMenu buttonHandler={buttonHandler} />
      ) : (
        <React.Fragment>
          <main>{children}</main>
          <FooterTop />
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
