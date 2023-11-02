import UpLoadBtnItem from "../../../commons/uploads/01/Upload01.container";
import * as info from "./BoardComponent.styles";
import type { IBoardComponent } from "./BoardComponent.type";
import { useBoardComponent } from "../../../../commons/hook/custom/useBoardComponent";
import { useQueryFetchBoard } from "../../../../commons/hook/query/useQueryFetchBoard";
import { useIdChecker } from "../../../../commons/hook/custom/useIdChecker";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
export default function BoardWrite(props: IBoardComponent): JSX.Element {
  const { id: boardId } = useIdChecker("boardId");
  const { data } = useQueryFetchBoard({ boardId });
  const {
    handleComplete,
    onChangeFileUrl,
    onClickAddress,
    onClickEdit,
    onClickSubmit,
    onToggleModal,
    onChangeAddress,
    onChangeZipCode,
    isOpen,
    images,
    zipcode,
    address,
    formState,
    register,
    handleSubmit,
    onChangeContent,
  } = useBoardComponent({ isEdit: props.isEdit, data });

  return (
    <info.Body>
      {isOpen && (
        <info.AddressModal
          open={isOpen}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <info.AddressSearchInput onComplete={handleComplete} />
        </info.AddressModal>
      )}
      <info.Wrapper>
        <h1>게시물 {props.isEdit ? "수정" : "등록"}</h1>
        <info.Box1>
          <info.Box>
            <info.Title>작성자</info.Title>
            <info.TextBox
              type="text"
              placeholder="이름을 적어주세요."
              {...register("writer")}
              defaultValue={data?.fetchBoard.writer ?? ""}
              readOnly={Boolean(data?.fetchBoard?.writer)}
            ></info.TextBox>
            <info.ErrText>{formState.errors.writer?.message}</info.ErrText>
          </info.Box>
          <info.Box>
            <info.Title>비밀번호</info.Title>
            <info.TextBox
              type="password"
              placeholder="비밀번호를 입력해주세요"
              {...register("password")}
            />
            <info.ErrText>{formState.errors.password?.message}</info.ErrText>
          </info.Box>
        </info.Box1>
        <info.Box>
          <info.Title>제목</info.Title>
          <info.TextBox
            type="text"
            placeholder="제목을 입력해주세요."
            {...register("title")}
            defaultValue={data?.fetchBoard?.title}
          ></info.TextBox>
          <info.ErrText>{formState.errors.title?.message}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>내용</info.Title>

          {(typeof data !== "undefined" || !props.isEdit) && (
            <ReactQuill
              style={{ height: "400px", marginBottom: "50px" }}
              placeholder="내용을 입력해주세요."
              onChange={onChangeContent}
              defaultValue={data?.fetchBoard?.contents}
            ></ReactQuill>
          )}
          <info.ErrText>{formState.errors.contents?.message}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>주소</info.Title>
          <info.TextBox2
            type="text"
            placeholder="123456"
            onChange={onChangeZipCode}
            readOnly={true}
            value={
              zipcode !== ""
                ? zipcode
                : data?.fetchBoard.boardAddress?.zipcode ?? ""
            }
          ></info.TextBox2>
          <info.Btn1 onClick={onClickAddress}>우편번호 검색</info.Btn1>
          <info.TextBox
            type="text"
            onChange={onChangeAddress}
            readOnly
            value={
              address !== ""
                ? address
                : data?.fetchBoard.boardAddress?.address ?? ""
            }
          ></info.TextBox>
          <info.TextBox
            type="text"
            {...register("addressDetail")}
            defaultValue={data?.fetchBoard.boardAddress?.addressDetail ?? ""}
          ></info.TextBox>
          <info.ErrText>{formState.errors.addressDetail?.message}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>유튜브</info.Title>
          <info.TextBox
            type="text"
            placeholder="링크를 복사해주세요."
            {...register("youtubeUrl")}
            defaultValue={data?.fetchBoard.youtubeUrl ?? ""}
          ></info.TextBox>
          <info.ErrText>{formState.errors.youtubeUrl?.message}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>사진 첨부</info.Title>
          <info.ImageBox>
            {images.map((el, index) => (
              <UpLoadBtnItem
                key={uuidv4()}
                onChangeFileUrl={onChangeFileUrl}
                index={index}
                url={el}
              />
            ))}
          </info.ImageBox>
        </info.Box>
        <info.Box>
          <info.Title>메인 설정</info.Title>
          <div>
            <info.CheckBox type="radio" name="gender"></info.CheckBox>
            <info.Text>남</info.Text>
            <info.CheckBox type="radio" name="gender"></info.CheckBox>
            <info.Text>여</info.Text>
          </div>
        </info.Box>
        <info.Btn
          onClick={
            props.isEdit
              ? handleSubmit(onClickEdit)
              : handleSubmit(onClickSubmit)
          }
          isValid={formState.isValid}
          // disabled={!formState.isValid}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </info.Btn>
      </info.Wrapper>
    </info.Body>
  );
}
