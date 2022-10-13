import "../styles/globals.scss";
import Layout from "../Components/Layout/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  function buttonHandler() {
    setOpen((prev) => !prev);
  }
  return (
    <Layout open={open} buttonHandler={buttonHandler}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
