import * as info from "./List.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { v4 as uuid4 } from "uuid";
import { useMoveToPage } from "../../../../commons/hook/custom/useMoveToPage";
import type { IListPage } from "./List.type";
import type { IBoard } from "../../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
export default function ListPage(props: IListPage): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const [accessToken] = useRecoilState(accessTokenState);
  console.log(accessToken);
  return (
    <info.Body>
      <info.Wrapper>
        <info.Post>
          <info.HeaderNum>번호</info.HeaderNum>
          <info.HeaderTitle>제목 </info.HeaderTitle>
          <info.HeaderWriter>작성자</info.HeaderWriter>
          <info.HeaderDate>날짜</info.HeaderDate>
        </info.Post>
        {(props.data?.fetchBoards ?? new Array(10).fill(1)).map(
          (el: IBoard, index: number) => (
            <info.PostList
              key={el._id}
              id={el._id}
              onClick={onClickMoveToPage(`/boards/${el._id}`)}
            >
              <info.Num>{index + 1}</info.Num>
              {props.data && (
                <info.Title>
                  {el.title
                    .replaceAll(props.keyword, `!@#${props.keyword}!@#`)
                    .split("!@#")
                    .map((el1: any) => (
                      <info.TitleWord
                        key={uuid4()}
                        style={{
                          color: el1 === props.keyword ? "orange" : "",
                        }}
                      >
                        {el1}
                      </info.TitleWord>
                    ))}
                </info.Title>
              )}
              <info.Writer>{el?.writer}</info.Writer>{" "}
              <info.Date>{getDate(el?.createdAt)}</info.Date>
            </info.PostList>
          )
        )}
      </info.Wrapper>
      <info.BtnWrapper>
        <info.RegBtn onClick={onClickMoveToPage("/boards/new")}>
          게시물 등록하기
        </info.RegBtn>
      </info.BtnWrapper>
    </info.Body>
  );
}
