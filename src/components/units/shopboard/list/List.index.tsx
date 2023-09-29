import * as info from "./List.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IShopListPage } from "./List.type";
import { v4 as uuidv4 } from "uuid";
import { useMoveToPage } from "../../../../commons/hook/custom/useMoveToPage";
import type { IUseditem } from "../../../../commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useShopList } from "../../../../commons/hook/custom/useShopList";
import { replacePrice } from "../../../commons/replacePrice/replacePrice";
export default function ShopList(props: IShopListPage): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { onLoadFunc, length, more } = useShopList({
    data: props.data,
    fetchMore: props.fetchMore,
  });
  return (
    <info.Body>
      <info.BtnWrapper>
        <info.RegBtn onClick={onClickMoveToPage("/shopboards/new")}>
          게시물 등록하기
        </info.RegBtn>
      </info.BtnWrapper>
      <info.Wrapper>
        <InfiniteScroll
          style={{ width: "1200px" }}
          dataLength={length}
          next={onLoadFunc}
          loader={<h3>로딩중...</h3>}
          hasMore={more}
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
              <span>{replacePrice(String(el.price)) + " 원"}</span>
              <info.Date>{getDate(el?.createdAt)}</info.Date>
            </info.PostList>
          ))}
        </InfiniteScroll>
      </info.Wrapper>
    </info.Body>
  );
}
