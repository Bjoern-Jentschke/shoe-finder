import Layout from "@/components/Layout/Layout.js";
import GlobalStyle from "../styles.js";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
