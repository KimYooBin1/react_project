import { Global } from "@emotion/react";
import Apollo from "../src/components/commons/apollo";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { globalStyled } from "../src/commons/styles/globalStyles";
import Layout from ".";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Apollo>
      <>
        <Global styles={globalStyled} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </Apollo>
  );
}
