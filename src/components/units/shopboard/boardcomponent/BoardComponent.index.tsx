import { useAuth } from "../../../../commons/hook/custom/useAuth";
import { useUseditem } from "../../../../commons/hook/custom/useUseditem";
import UpLoadBtnItem from "../../../commons/uploads/01/Upload01.container";
import * as info from "./BoardComponent.styles";
import type { IShopBoardComponent } from "./BoardComponent.type";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { KakaoMap } from "../../../commons/kakaoMap/kakaoMap";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
export default function ShopBoardWriteUI(
  props: IShopBoardComponent
): JSX.Element {
  useAuth();
  const {
    isOpen,
    onToggleModal,
    register,
    formState,
    onChangeContent,
    onChangeZipCode,
    onClickAddress,
    onChangeAddress,
    onChangeFileUrl,
    AddressHandle,
    watch,
    onClickEdit,
    onClickSubmit,
    handleSubmit,
    images,
    usedData,
  } = useUseditem();
  console.log(usedData);
  return (
    <info.Body>
      {isOpen && (
        <info.AddressModal
          open={isOpen}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <info.AddressSearchInput onComplete={AddressHandle} />
        </info.AddressModal>
      )}
      <info.Wrapper>
        <h1>게시물 {props.isEdit ? "수정" : "등록"}</h1>

        <info.Box>
          <info.Title>제목</info.Title>
          <info.TextBox
            type="text"
            defaultValue={usedData?.fetchUseditem.name}
            placeholder="상품명을 입력해주세요."
            {...register("name")}
          ></info.TextBox>
          <info.ErrText>{formState.errors.name?.message}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>한줄 요약</info.Title>
          <info.TextBox
            type="text"
            defaultValue={usedData?.fetchUseditem.remarks}
            placeholder="상품명을 입력해주세요."
            {...register("remarks")}
          ></info.TextBox>
          <info.ErrText>{formState.errors.remarks?.message}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>상품설명</info.Title>
          <ReactQuill
            style={{ height: "400px", marginBottom: "50px" }}
            placeholder="내용을 입력해주세요."
            onChange={onChangeContent}
            defaultValue={usedData?.fetchUseditem.contents}
          ></ReactQuill>
          <info.ErrText>{formState.errors.contents?.message}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>판매가격</info.Title>
          <info.TextBox
            type="text"
            placeholder="판매 가격을 입력해주세요."
            defaultValue={usedData?.fetchUseditem.price ?? 0}
            {...register("price")}
          ></info.TextBox>
          <info.ErrText>{formState.errors.price?.message}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>태그</info.Title>
          <info.TextBox
            type="text"
            placeholder="태그을 입력해주세요."
            // {...register("remark")}
            // defaultValue={props.data?.fetchBoard?.title}
          ></info.TextBox>
        </info.Box>
        <info.Box>
          <KakaoMap
            ReadOnly={true}
            lat={Number(watch("lat"))}
            lng={Number(watch("lng"))}
          />
          <info.Title>주소</info.Title>
          <info.TextBox2
            type="text"
            placeholder="123456"
            onChange={onChangeZipCode}
            readOnly={true}
            value={
              typeof watch("zipcode") === "undefined"
                ? usedData?.fetchUseditem.useditemAddress?.zipcode ?? ""
                : watch("zipcode")
            }
          ></info.TextBox2>
          <info.Btn1 onClick={onClickAddress}>우편번호 검색</info.Btn1>
          <info.TextBox2
            type="text"
            placeholder="위도"
            {...register("lat")}
            defaultValue={
              usedData?.fetchUseditem.useditemAddress?.lat ?? 33.450701
            }
          ></info.TextBox2>
          <info.TextBox2
            type="text"
            placeholder="경도"
            {...register("lng")}
            defaultValue={
              usedData?.fetchUseditem.useditemAddress?.lng ?? 126.570667
            }
          ></info.TextBox2>
          <info.TextBox
            type="text"
            onChange={onChangeAddress}
            readOnly
            value={
              typeof watch("address") === "undefined"
                ? usedData?.fetchUseditem.useditemAddress?.address ?? ""
                : watch("address")
            }
          ></info.TextBox>
          <info.TextBox
            type="text"
            {...register("addressDetail")}
            defaultValue={
              usedData?.fetchUseditem.useditemAddress?.addressDetail ?? ""
            }
          ></info.TextBox>
          <info.ErrText>{formState.errors.addressDetail?.message}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>사진 첨부</info.Title>
          <info.ImageBox>
            {images.map((el, index) => (
              <UpLoadBtnItem
                key={index}
                onChangeFileUrl={onChangeFileUrl}
                index={index}
                url={el}
              />
            ))}
          </info.ImageBox>
        </info.Box>
        <info.Btn
          onClick={
            props.isEdit
              ? handleSubmit(onClickEdit)
              : handleSubmit(onClickSubmit)
          }
          disabled={!formState.isValid}
          isValid={formState.isValid}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </info.Btn>
      </info.Wrapper>
    </info.Body>
  );
}
