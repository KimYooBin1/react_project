import * as info from "./AttendanceWrite.styles";
import type { IAttendanceWrite } from "./AttendanceWrite.type";
export default function AttendebceWriteUI(
  props: IAttendanceWrite
): JSX.Element {
  return (
    <info.Body>
      <info.Wrapper>
        <h1>출책</h1>
        <info.Box1>
          <info.Box>
            <info.Title>작성자</info.Title>
            <info.TextBox
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
            ></info.TextBox>
            <info.ErrText>{props.err_writer}</info.ErrText>
          </info.Box>
        </info.Box1>
        <info.Box>
          <info.Title>제목</info.Title>
          <info.TextBox
            type="text"
            placeholder="제목을 입력해주세요."
            onChange={props.onChangeTitle}
          ></info.TextBox>
          <info.ErrText>{props.err_title}</info.ErrText>
        </info.Box>
        <info.Box>
          <info.Title>내용</info.Title>
          <info.TextBox1
            placeholder="내용을 입력해주세요."
            onChange={props.onChangeContent}
          ></info.TextBox1>
          <info.ErrText>{props.err_content}</info.ErrText>
        </info.Box>

        <info.Btn onClick={props.onClickSubmit}>등록하기</info.Btn>
      </info.Wrapper>
    </info.Body>
  );
}
