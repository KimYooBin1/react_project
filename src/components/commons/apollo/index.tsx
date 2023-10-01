import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoginState } from "../../../commons/stores";
import { useEffect } from "react";

interface IApolloProps {
  children: JSX.Element;
}

export default function Apollo(props: IApolloProps): JSX.Element {
  const [accessToken] = useRecoilState(accessTokenState);
  const [, setIsLogin] = useRecoilState(isLoginState);
  useEffect(() => {
    if (
      accessToken === undefined ||
      accessToken === null ||
      accessToken === ""
    ) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
