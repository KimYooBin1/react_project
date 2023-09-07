import UpLoadBtnItem from "../../../commons/uploads/01/Upload01.container";
import * as info from "./BoardComponent.styles";
import type { IBoardComponentUI } from "./BoardComponent.type";
export default function BoardWriteUI(props: IBoardComponentUI): JSX.Element {
  return (
    <info.Body>
      {props.isOpen && (
        <info.AddressModal
          open={props.isOpen}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
        >
          <info.AddressSearchInput onComplete={props.handleComplete} />
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
              onChange={props.onChangeName}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              readOnly={Boolean(props.data?.fetchBoard?.writer)}
            ></info.TextBox>
            <info.ErrText>{props.err_name}</info.ErrText>
          </info.Box>
          <info.Box>
            <info.Title>비밀번호</info.Title>
            <info.TextBox
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={props.onChangePassword}
            ></info.TextBox>
            <info.ErrText>{props.err_title}</info.ErrText>
          </info.Box>
        </info.Box1>
        <info.Box>
          <info.Title>제목</info.Title>
          <info.TextBox
            type="text"
            placeholder="제목을 입력해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard?.title}
          ></info.TextBox>
          <info.ErrText>{props.err_title}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>내용</info.Title>
          <info.TextBox1
            placeholder="내용을 입력해주세요."
            onChange={props.onChangeContent}
            defaultValue={props.data?.fetchBoard?.contents}
          ></info.TextBox1>
          <info.ErrText>{props.err_content}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>주소</info.Title>
          <info.TextBox2
            type="text"
            placeholder="123456"
            onChange={props.onChangeAdd1}
            readOnly={true}
            value={
              props.zoneCode !== ""
                ? props.zoneCode
                : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
            }
          ></info.TextBox2>
          <info.Btn1 onClick={props.onClickAddress}>우편번호 검색</info.Btn1>
          <info.TextBox
            type="text"
            onChange={props.onChangeAdd2}
            readOnly
            value={
              props.address !== ""
                ? props.address
                : props.data?.fetchBoard.boardAddress?.address ?? ""
            }
          ></info.TextBox>
          <info.TextBox
            type="text"
            onChange={props.onChangeAdd3}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          ></info.TextBox>
          <info.ErrText>{props.err_add}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>유튜브</info.Title>
          <info.TextBox
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeLink}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          ></info.TextBox>
          <info.ErrText>{props.err_link}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>사진 첨부</info.Title>
          <info.ImageBox>
            {props.images.map((el, index) => (
              <UpLoadBtnItem
                key={index}
                onChangeFileUrl={props.onChangeFileUrl}
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
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </info.Btn>
      </info.Wrapper>
    </info.Body>
  );
}
