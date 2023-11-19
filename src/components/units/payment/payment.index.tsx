import Head from "next/head";
import useCreatePointTransactionOfLoading from "../../../commons/hook/custom/useCreatePointTransactionOfLoading";

export default function Payment() {
  const {onClickPayment} = useCreatePointTransactionOfLoading();  
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
