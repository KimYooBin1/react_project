import * as info from "./List.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IShopListPage } from "./List.type";
import { v4 as uuidv4 } from "uuid";
import { useMoveToPage } from "../../../../commons/hook/custom/useMoveToPage";
import type { IUseditem } from "../../../../commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useShopList } from "../../../../commons/hook/custom/useShopList";
export default function ShopList(props: IShopListPage): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { onLoadFunc, length } = useShopList({
    data: props.data,
    fetchMore: props.fetchMore,
  });
  return (
    <info.Body>
      <info.Wrapper>
        <info.Post>
          <info.HeaderNum>번호</info.HeaderNum>
          <info.HeaderImg>사진</info.HeaderImg>
          <info.HeaderName>제목 </info.HeaderName>
          <info.HeaderDate>날짜</info.HeaderDate>
        </info.Post>

        <InfiniteScroll
          style={{ width: "1200px" }}
          dataLength={length}
          next={onLoadFunc}
          loader={<h3>로딩중...</h3>}
          hasMore={true}
        >
          {props.data?.fetchUseditems.map((el: IUseditem, index: number) => (
            <info.PostList
              key={uuidv4()}
              onClick={onClickMoveToPage(`/shopboards/${el._id}`)}
            >
              <info.Num>{index + 1}</info.Num>
              <info.ListImg
                src={
                  el.images !== undefined && el.images !== null
                    ? el.images[0] !== undefined && el.images[0] !== ""
                      ? `https://storage.googleapis.com/${el.images[0]}`
                      : "/img/image.png"
                    : "/img/image.png"
                }
              />
              <info.Name>
                {el.name
                  .replaceAll(props.keyword, `!@#${props.keyword}!@#`)
                  .split("!@#")
                  .map((el1: any) => (
                    <info.NameWord
                      key={uuidv4()}
                      style={{
                        color: el1 === props.keyword ? "orange" : "",
                      }}
                    >
                      {el1}
                    </info.NameWord>
                  ))}
              </info.Name>
              <info.Date>{getDate(el?.createdAt)}</info.Date>
            </info.PostList>
          ))}
        </InfiniteScroll>
      </info.Wrapper>
      <info.BtnWrapper>
        <info.RegBtn onClick={onClickMoveToPage("/shopboards/new")}>
          게시물 등록하기
        </info.RegBtn>
      </info.BtnWrapper>
    </info.Body>
  );
}
