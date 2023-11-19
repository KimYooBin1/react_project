import { useRouter } from "next/router";
import { useMutationDeleteUsedItem } from "../mutation/useMutationDeleteUsedItem";
import { alertError, success } from "../../libraries/modal";
import { useQueryFetchUsedItem } from "../query/useQueryFetchUsedItem";
import { useQueryFetchUserLoggedIn } from "../query/useQueryFetchUserLoggedIn";
import useMutationCreatePointTransactionOfBuyingAndSelling from "../mutation/useMutationCreatePointTransactionOfBuyingAndSelling";
import { useState } from "react";

interface IUsedItemArg {
  useditemId: string;
}

export const useUsedItemDetail = (arg: IUsedItemArg) => {
  const router = useRouter();
  const { data } = useQueryFetchUsedItem(arg.useditemId);
  const [deleteUsedItem] = useMutationDeleteUsedItem();
  const [purchaseItem] = useMutationCreatePointTransactionOfBuyingAndSelling();
  // const {onClickMoveToPage} = useMoveToPage();

  const { data: userData } = useQueryFetchUserLoggedIn();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onClickOk = () =>{
    toggleModal();
    // onClickMoveToPage("/mypage")  구매목록 구현시 수정
    success("장바구니로 이동")
  }

  const onClickCancel = () =>{
    toggleModal();
  }

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

  const onClickPurchase = async () : Promise<void> =>{
    try{
      await purchaseItem({
        variables:{
          useritemId:arg.useditemId
        }
      })
      success("구매")
      setIsOpen(true);
    }catch(error){
      if(error instanceof Error){
        alertError(error.message);
      }
    }
  }

  return { onClickDelete, onClickEdit,onClickPurchase,onClickOk, onClickCancel,data, userData, isOpen };
};
