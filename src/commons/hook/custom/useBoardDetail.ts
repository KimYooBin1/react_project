import { useRouter } from "next/router";
import { success } from "../../libraries/modal";
import { useDeleteBoard } from "../mutation/useDeleteBoard";

export const useBoard = () => {
  const router = useRouter();
  const [deleteBoard] = useDeleteBoard();
  const onClickDelete = (): void => {
    if (typeof router.query.boardId !== "string") return;
    try {
      void deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      void router.push(`/boards/page`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
    success("삭제");
  };

  return { onClickDelete };
};
