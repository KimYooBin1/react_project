import type { IQuery } from "../../../../commons/types/generated/types";
export interface IBoardDetailUi {
  data?: Pick<IQuery, "fetchBoard">;
  onClickList: () => void;
  onClickDelete: () => void;
  onClickEdit: () => void;
  onClickLike: () => void;
  onClickDisLike: () => void;
}
