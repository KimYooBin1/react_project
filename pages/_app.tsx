import { Global } from "@emotion/react";
import Apollo from "../src/components/commons/apollo";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { globalStyled } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
import Layout from "../src/commons/layout";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Apollo>
        <>
          <Global styles={globalStyled} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </Apollo>
    </RecoilRoot>
  );
}
