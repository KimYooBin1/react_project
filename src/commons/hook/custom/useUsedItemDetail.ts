import { useRouter } from "next/router";
import { useMutationDeleteUsedItem } from "../mutation/useMutationDeleteUsedItem";
import { success } from "../../libraries/modal";
import { useQueryFetchUsedItem } from "../query/useQueryFetchUsedItem";
import { useQueryFetchUserLoggedIn } from "../query/useQueryFetchUserLoggedIn";

interface IUsedItemArg {
  useditemId: string;
}

export const useUsedItemDetail = (arg: IUsedItemArg) => {
  const router = useRouter();
  const { data } = useQueryFetchUsedItem(arg.useditemId);
  const [deleteUsedItem] = useMutationDeleteUsedItem();
  const { data: userData } = useQueryFetchUserLoggedIn();

  const onClickDelete = (): void => {
    try {
      void deleteUsedItem({
        variables: { useditemId: arg.useditemId },
      });
      void router.push(`/shopboards/page`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
    success("물건 삭제");
  };
  const onClickEdit = () => {
    void router.push(`/shopboards/${arg.useditemId}/edit`);
  };
  return { onClickDelete, onClickEdit, data, userData };
};
