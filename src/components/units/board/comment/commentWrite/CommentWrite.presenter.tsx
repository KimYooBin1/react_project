import type { IBoardCommentWriter } from "./CommentWrite.type";
import * as info from "./CommentWrite.styles";
export default function BoardCommentWriteUI(
  props: IBoardCommentWriter
): JSX.Element {
  return (
    <info.WriteWrapper>
      <info.WriteTitle>
        <info.WriteImg src="/img/title_img.png" />
        <info.WriteSpan>댓글</info.WriteSpan>
      </info.WriteTitle>
      <info.WriteInfo>
        <info.WriteInfoInput
          type="text"
          placeholder="작성자"
          onChange={props.onChangeWriter}
          value={props.writer}
        />
        <info.WriteInfoInput
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
          value={props.password}
        />
        <info.StarInput allowHalf defaultValue={0} onChange={props.setRating} />
      </info.WriteInfo>
      <info.WriteCommentBox>
        <info.WriteComment
          placeholder="개인정보를 공유 및 요청하거나, 
                  명예 훼손, 무단 광고, 불법 정보 유
                  포시 모니터링 후 삭제되 수 있으며,
                  이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
          maxLength={100}
          value={props.contents}
        />
        <info.WriteCommentInfoBox>
          <info.WriteCommentInfoText>
            <span>{props.length !== "" ? props.length : "0"}</span>/100
          </info.WriteCommentInfoText>
          <info.WriteCommentInfoBtn onClick={props.onClickSubmit}>
            등록하기
          </info.WriteCommentInfoBtn>
        </info.WriteCommentInfoBox>
      </info.WriteCommentBox>
    </info.WriteWrapper>
  );
}
