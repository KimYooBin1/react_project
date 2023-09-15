import { useAuth } from "../../../commons/hook/custom/useAuth";
import { useQueryFetchBoardsOfMine } from "../../../commons/hook/query/useQueryFetchBoardsOfMine";
import { useQueryFetchUserLoggedIn } from "../../../commons/hook/query/useQueryFetchUserLoggedIn";
import * as info from "./mypage.styles";
import { v4 as uuidv4 } from "uuid";
export default function MyPage(): JSX.Element {
  useAuth();
  const { data: userData } = useQueryFetchUserLoggedIn();
  const { data } = useQueryFetchBoardsOfMine();

  return (
    <info.Body>
      <info.InfoWrapper>
        <info.UserInfoTitle>MYPAGE</info.UserInfoTitle>
        <info.InfoImg src="/img/profile.png" />
        <info.InfoName>{userData?.fetchUserLoggedIn.name}</info.InfoName>
        <info.InfoPoint>
          {userData?.fetchUserLoggedIn.userPoint?.amount}
        </info.InfoPoint>
        <info.InfoMyShop>내 장터</info.InfoMyShop>
        <info.InfoMyPoint>내 포인트</info.InfoMyPoint>
        <info.InfoMyProfile>내 프로필</info.InfoMyProfile>
      </info.InfoWrapper>
      <info.BoardsWrapper>
        <info.Post>
          <info.HeaderNum>번호</info.HeaderNum>
          <info.HeaderTitle>제목 </info.HeaderTitle>
          <info.HeaderPrice>판매가격</info.HeaderPrice>
          <info.HeaderDate>날짜</info.HeaderDate>
        </info.Post>
        <info.PostList>
          {data === undefined ? (
            <>
              <div>작성하신 판매글이 없습니다</div>
            </>
          ) : (
            <div>
              {data.fetchBoardsOfMine.map((el) => (
                <info.Post key={uuidv4()}>
                  <info.Num>번호</info.Num>
                  <info.Title>제목 </info.Title>
                  <info.Price>판매가격</info.Price>
                  <info.Date>날짜</info.Date>
                </info.Post>
              ))}
            </div>
          )}
        </info.PostList>
      </info.BoardsWrapper>
    </info.Body>
  );
}
