import Head from "next/head";
import { useQueryFetchUserLoggedIn } from "../../../commons/hook/query/useQueryFetchUserLoggedIn";

declare const window: typeof globalThis & { IMP: any };
export default function Payment() {
  const { data } = useQueryFetchUserLoggedIn();
  const onClickPayment = (point: number) => (): void => {
    window.IMP.init("imp36106767"); // 예: 'imp00000000a'
    window.IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011", 주석처리를 하면 랜덤으로 id가 생성이된다
        name: `${point} P 충전`,
        amount: point,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/mypage/payment", //모바일에서는 결제시 페이지 주소가 바뀜, 따라서 결제 끝나고 돌아갈 주소를 지정
      },
      (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          console.log(rsp);
          //   백엔드에 결제 정보 넘겨주기
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };
  return (
    <>
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <button onClick={onClickPayment(1000)}>1,000 P 충전하기</button>
      <button onClick={onClickPayment(5000)}>5,000 P 충전하기</button>
      <button onClick={onClickPayment(10000)}>10,000 P 충전하기</button>
      <button onClick={onClickPayment(20000)}>20,000 P 충전하기</button>
    </>
  );
}
