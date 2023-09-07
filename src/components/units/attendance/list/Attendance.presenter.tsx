import * as info from "./Attendance.styles";
import type { IAttendancePage } from "./Attendance.type";
import { EditOutlined } from "@ant-design/icons";
export default function AttendanceUI(props: IAttendancePage): JSX.Element {
  return (
    <info.Body>
      <info.Wrapper>
        <info.Post>
          <info.HeaderNum>번호</info.HeaderNum>
          <info.HeaderTitle>제목 </info.HeaderTitle>
          <info.HeaderContent>내용</info.HeaderContent>
          <info.HeaderWriter>작성자</info.HeaderWriter>
        </info.Post>
        {props.dataBoards.map((el: any, index: number) => (
          <info.PostList key={el._id}>
            <info.Num>{index + 1}</info.Num>
            <info.Title>{el?.title}</info.Title>{" "}
            <info.Content>{el?.contents}</info.Content>
            <info.Writer>{el?.writer}</info.Writer>{" "}
          </info.PostList>
        ))}
      </info.Wrapper>
      <info.BtnWrapper>
        <info.RegBtn onClick={props.onClickSubmit}>
          <EditOutlined rev={""} style={{ marginRight: "20px" }} />
          출책하기
        </info.RegBtn>
      </info.BtnWrapper>
    </info.Body>
  );
}
