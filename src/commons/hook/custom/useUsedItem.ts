import { useRouter } from "next/router";
import { useMutationDeleteUsedItem } from "../mutation/useMutationDeleteUsedItem";
import { success } from "../../libraries/modal";
import { useQueryFetchUsedItem } from "../query/useQueryFetchUsedItem";
import { useState } from "react";

interface IUsedItemArg {
  useditemId: string;
}

export const useUsedItem = (arg: IUsedItemArg) => {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const { data } = useQueryFetchUsedItem(arg.useditemId);

  const [deleteUsedItem] = useMutationDeleteUsedItem();

  if (localStorage.getItem("accessToken") === data?.fetchUseditem.seller?._id) {
    setAuth(true);
  }
  const onClickDelete = (): void => {
    try {
      void deleteUsedItem({
        variables: { useditemId: arg.useditemId },
      });
      void router.push(`/shopboards/page`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
    success("물건 삭제");
  };
  return { onClickDelete, data, auth };
};
