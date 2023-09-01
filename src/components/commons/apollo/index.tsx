import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface IApolloProps {
  children: JSX.Element;
}

export default function Apollo(props: IApolloProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
