// 하드코딩된 미니 백엔드
import { graphql } from "msw";

const gql = graphql.link("http://mock.com/graphql");
//가짜 api
export const apis = [
  gql.mutation("createBoard", (req, res, ctx) => {
    const { writer, title, contents } = req.variables.createBoardInput; //fireEvent 로 입력된 정보가 저장되어있다

    return res(
      ctx.data({
        createBoard: {
          _id: "qqq",
          writer,
          title,
          contents,
          __typename: "Board",
        },
      })
    );
  }),
  gql.query("fetchBoards", (req, res, ctx)=>{
    return res(
      ctx.data({
        fetchBoards:{
          _id: ["_id1","_id2","_id3","_id4","_id5","_id6","_id7","_id8","_id9","_id10"],
          title: ["title","title","title","title","title","title","title","title","title","title"],
          writer: ["writer","writer","writer","writer","writer","writer","writer","writer","writer","writer",],
          createAt: ["2023-11-23T06:07:02.173Z","2023-11-23T06:07:02.173Z","2023-11-23T06:07:02.173Z",
                    "2023-11-23T06:07:02.173Z","2023-11-23T06:07:02.173Z","2023-11-23T06:07:02.173Z",
                    "2023-11-23T06:07:02.173Z","2023-11-23T06:07:02.173Z","2023-11-23T06:07:02.173Z",
                    "2023-11-23T06:07:02.173Z"],
          __typename: "Board",
        }
      })
    )
  })
];
