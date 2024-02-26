import Layout from "@/components/Layout/index.js";
import GlobalStyle from "../styles.js";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
