import type { IQuery } from "../../../../commons/types/generated/types";
export interface IBoardDetailUi {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickList: () => void;
  onClickDelete: () => void;
  onClickEdit: () => void;
  onClickLike: () => void;
}
