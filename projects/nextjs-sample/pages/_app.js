import "../styles/globals.css";
import Layout from "../components/layout/Layout";

// root component where we add any general component instead of add on every particular component
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
