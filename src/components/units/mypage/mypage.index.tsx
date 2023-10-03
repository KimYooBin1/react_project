import { useAuth } from "../../../commons/hook/custom/useAuth";
import { useQueryFetchUserLoggedIn } from "../../../commons/hook/query/useQueryFetchUserLoggedIn";
import * as info from "./mypage.styles";
import { v4 as uuidv4 } from "uuid";
import MyPageItem from "./mypageItem.index";
// import Search from "../../commons/search/search.index";

interface IMyPageProps {
  data: any;
}

export default function MyPage(props: IMyPageProps): JSX.Element {
  useAuth();
  const { data: userData } = useQueryFetchUserLoggedIn();
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
          <info.HeaderTitle>상품명 </info.HeaderTitle>
          <info.HeaderPrice>판매가격</info.HeaderPrice>
          <info.HeaderDate>날짜</info.HeaderDate>
        </info.Post>
        <info.PostList>
          {typeof props.data === "undefined" ? (
            <>
              <div>작성하신 판매글이 없습니다</div>
            </>
          ) : (
            <div style={{ width: "100%" }}>
              {props.data.fetchUseditemsISold.map((el: any, index: number) => (
                <MyPageItem key={uuidv4()} el={el} index={index} />
              ))}
            </div>
          )}
        </info.PostList>
      </info.BoardsWrapper>
    </info.Body>
  );
}
