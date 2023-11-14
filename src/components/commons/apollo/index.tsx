import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState , useRecoilValueLoadable} from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../../../commons/stores";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

interface IApolloProps {
  children: JSX.Element;
}


export default function Apollo(props: IApolloProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const accessTokenCheck = useRecoilValueLoadable(restoreAccessTokenLoadable)

  useEffect(() => {
    void accessTokenCheck.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    })
  }, []);
  
  const errorLink = onError(({graphQLErrors, operation, forward}) =>{
    if(graphQLErrors){
      for(const err of graphQLErrors){
        if(err.extensions.code === "UNAUTHENTICATED")
        {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken)
              operation.setContext({
                headers:{
                  ...operation.getContext().headers,
                  Authorization : `Bearer ${newAccessToken}`,
                },
              })
            })
          ).flatMap(() => forward(operation))
        }
      }
    }  
  })

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials:"include"
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
    connectToDevTools:true,
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
