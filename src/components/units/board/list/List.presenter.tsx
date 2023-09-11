import * as info from "./List.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IListPageUI } from "./List.type";
import { v4 as uuid4 } from "uuid";
export default function ListUI(props: IListPageUI): JSX.Element {
  return (
    <info.Body>
      <info.Wrapper>
        <info.Post>
          <info.HeaderNum>번호</info.HeaderNum>
          <info.HeaderTitle>제목 </info.HeaderTitle>
          <info.HeaderWriter>작성자</info.HeaderWriter>
          <info.HeaderDate>날짜</info.HeaderDate>
        </info.Post>
        {props.data?.fetchBoards.map((el: any, index: number) => (
          <info.PostList key={el._id} id={el._id} onClick={props.onClickList}>
            <info.Num>{index + 1}</info.Num>
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
            <info.Writer>{el?.writer}</info.Writer>{" "}
            <info.Date>{getDate(el?.createdAt)}</info.Date>
          </info.PostList>
        ))}
      </info.Wrapper>
      <info.BtnWrapper>
        <info.RegBtn onClick={props.onClickBtn}>게시물 등록하기</info.RegBtn>
      </info.BtnWrapper>
    </info.Body>
  );
}
