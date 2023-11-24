import { useAuth } from "../../../../commons/hook/custom/useAuth";
import { useUseditem } from "../../../../commons/hook/custom/useUsedItem";
import UpLoadBtnItem from "../../../commons/uploads/01/Upload01.container";
import * as info from "./BoardComponent.styles";
import type { IShopBoardComponent } from "./BoardComponent.type";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { KakaoMap } from "../../../commons/kakaoMap/kakaoMap";
import { useState } from "react";
import { useIdChecker } from "../../../../commons/hook/custom/useIdChecker";
import { useQueryFetchUsedItem } from "../../../../commons/hook/query/useQueryFetchUsedItem";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
export default function ShopBoardWrite(
  props: IShopBoardComponent
): JSX.Element {
  useAuth();

  const { id: useditemId } = useIdChecker("useditemId");
  const { data } = useQueryFetchUsedItem(useditemId);

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
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
  } = useUseditem({
    isEdit: props.isEdit,
    data,
    useditemId,
    lat: String(lat),
    lng: String(lng),
  });
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
            defaultValue={data?.fetchUseditem.name}
            placeholder="상품명을 입력해주세요."
            {...register("name")}
            className="name"
          ></info.TextBox>
          <info.ErrText>{formState.errors.name?.message}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>한줄 요약</info.Title>
          <info.TextBox
            type="text"
            defaultValue={data?.fetchUseditem.remarks}
            placeholder="상품설명 입력해주세요."
            {...register("remarks")}
            className="remarks"
          ></info.TextBox>
          <info.ErrText>{formState.errors.remarks?.message}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>상품설명</info.Title>
          {(typeof data !== "undefined" || !props.isEdit) && (
            <ReactQuill
              style={{ height: "400px", marginBottom: "50px" }}
              placeholder="내용을 입력해주세요."
              onChange={onChangeContent}
              defaultValue={data?.fetchUseditem.contents}
              className="contents"
            ></ReactQuill>
          )}
          <info.ErrText>{formState.errors.contents?.message}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>판매가격</info.Title>
          {(typeof data !== "undefined" || !props.isEdit) && (
            <info.TextBox
              type="text"
              placeholder="0 ₩"
              defaultValue={String(data?.fetchUseditem.price ?? "")}
              {...register("price")}
              className="pirce"
            ></info.TextBox>
          )}
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
          {(typeof data !== "undefined" || !props.isEdit) && (
            <KakaoMap
              ReadOnly={true}
              address={
                typeof watch("address") === "undefined"
                  ? String(data?.fetchUseditem.useditemAddress?.address)
                  : watch("address")
              }
              setLat={setLat}
              setLng={setLng}
            />
          )}
          <info.Title>주소</info.Title>
          <info.TextBox2
            type="text"
            placeholder="123456"
            onChange={onChangeZipCode}
            readOnly={true}
            value={
              typeof watch("zipcode") === "undefined"
                ? data?.fetchUseditem.useditemAddress?.zipcode ?? ""
                : watch("zipcode")
            }
            className="zipcode"
          ></info.TextBox2>
          <info.Btn1 onClick={onClickAddress} className="searchAddress">우편번호 검색</info.Btn1>
          <info.TextBox2
            type="text"
            placeholder="위도"
            readOnly={true}
            value={
              lat === 0 ? data?.fetchUseditem.useditemAddress?.lat ?? "" : lat
            }
            className="latitude "
          ></info.TextBox2>
          <info.TextBox2
            type="text"
            placeholder="경도"
            readOnly={true}
            value={
              lng === 0 ? data?.fetchUseditem.useditemAddress?.lng ?? "" : lng
            }
            className="longitude "
          ></info.TextBox2>
          <info.TextBox
            type="text"
            onChange={onChangeAddress}
            readOnly
            value={
              typeof watch("address") === "undefined"
                ? data?.fetchUseditem.useditemAddress?.address ?? ""
                : watch("address")
            }
            className="address"
          ></info.TextBox>
          <info.TextBox
            type="text"
            {...register("addressDetail")}
            defaultValue={
              data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
            }
            className="addressDetail"
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
          // disabled={!formState.isValid}
          isValid={formState.isValid}
          className="submit"
        >
          {props.isEdit ? "수정" : "등록"}하기
        </info.Btn>
      </info.Wrapper>
    </info.Body>
  );
}
