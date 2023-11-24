// import {
//   ApolloClient,
//   ApolloProvider,
//   HttpLink,
//   InMemoryCache,
// } from "@apollo/client";
// import BoardsPage from "../../pages/boards/page";
// import { render, screen } from "@testing-library/react";
// import fetch from "cross-fetch";
// import "@testing-library/jest-dom"

// jest.mock("next/router", () => require("next-router-mock")); //실제 next/router 를 import 하는것을 next-router-mock 으로 치환한다


// it("api를 모킹해 fetch_boards 테스트", async () => {
//   const client = new ApolloClient({
//     link: new HttpLink({
//       uri: "http://mock.com/graphql",
//       fetch,
//     }),
//     cache: new InMemoryCache(),
//   });
//   render(
//     <ApolloProvider client={client}>
//       <BoardsPage />
//     </ApolloProvider>
//   );
  
// 	const myText1 = screen.getByText("title")
//   expect(myText1).toBeInTheDocument()
// });
