import { type ChangeEvent, useEffect, useState } from "react";
import { useMutationCreateBoard } from "../mutation/useMutationCreateBoard";
import { useMutationUpdateBoard } from "../mutation/useMutationUpdateBoard";
import {
  alertError,
  errorChange,
  errorInput,
  success,
} from "../../libraries/modal";
import { useRouter } from "next/router";
import type { IQuery, IUpdateBoardInput } from "../../types/generated/types";
import type { Address } from "react-daum-postcode/lib/loadPostcode";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../components/units/board/boardcomponent/BoardComponent.yup";
import { useForm } from "react-hook-form";
interface IUseBoardComponent {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

interface IFetchBoardArgs {
  writer: string;
  password: string;
  title: string;
  contents: string;
  addressDetail: string;
  youtubeUrl: string;
}

export const useBoardComponent = (arg: IUseBoardComponent) => {
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const router = useRouter();

  useEffect(() => {
    const images = arg.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setImages([...images]);
    if (arg.isEdit) {
      console.log(arg.data?.fetchBoard);
      setValue("contents", arg.data?.fetchBoard.contents ?? "");
      setValue("writer", arg.data?.fetchBoard.writer ?? "");
      setValue("title", arg.data?.fetchBoard.title ?? "");
      setValue(
        "addressDetail",
        arg.data?.fetchBoard.boardAddress?.addressDetail ?? ""
      );
      setValue("youtubeUrl", arg.data?.fetchBoard.youtubeUrl ?? "");
    }
  }, [arg.data]);

  const [createBoard] = useMutationCreateBoard();
  const [updateBoard] = useMutationUpdateBoard();

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  const [images, setImages] = useState(["", "", ""]);
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };
  const onClickAddress = (): void => {
    onToggleModal();
  };
  const handleComplete = (data: Address): void => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    onToggleModal();
  };
  const onChangeZipCode = (event: ChangeEvent<HTMLInputElement>) => {
    setZipcode(event.currentTarget.value);
  };
  function onChangeAddress(event: ChangeEvent<HTMLInputElement>): void {
    setAddress(event.target.value);
  }

  const onClickSubmit = async (data: IFetchBoardArgs): Promise<void> => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
          youtubeUrl: data.youtubeUrl,
          images: [...images],
          boardAddress: {
            zipcode,
            address,
            addressDetail: data.addressDetail,
          },
        },
      },
    });
    if (result.data?.createBoard._id === undefined) {
      alertError("요청이 잘못되었습니다");
      return;
    }
    success("글");
    void router.push(`/boards/${result.data?.createBoard._id}`);
  };

  const onClickEdit = async (data: IFetchBoardArgs): Promise<void> => {
    const currentFile = JSON.stringify(images);
    const defaultFile = JSON.stringify(arg.data?.fetchBoard.images);
    const isChangedFile = currentFile !== defaultFile;
    if (
      data.title === "" &&
      data.contents === "" &&
      data.addressDetail === "" &&
      data.youtubeUrl === "" &&
      !isChangedFile
    ) {
      errorChange();
      return;
    }
    if (data.password === "") {
      errorInput("비밀번호");
      return;
    }
    if (typeof router.query.boardId !== "string") {
      alertError("요청이 잘못되었습니다");
      return;
    }
    const updateInput: IUpdateBoardInput = {};
    if (data.title !== "") {
      updateInput.title = data.title;
    }
    if (data.contents !== "") {
      updateInput.contents = data.contents;
    }
    if (data.youtubeUrl !== "") {
      updateInput.youtubeUrl = data.youtubeUrl;
    }
    if (zipcode !== "" || address !== "" || data.addressDetail !== "") {
      updateInput.boardAddress = {};
      if (zipcode !== "") {
        updateInput.boardAddress.zipcode = zipcode;
      }
      if (address !== "") {
        updateInput.boardAddress.address = address;
      }
      if (data.addressDetail !== "") {
        updateInput.boardAddress.addressDetail = data.addressDetail;
      }
    }
    if (isChangedFile) updateInput.images = images;
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: data.password,
          updateBoardInput: updateInput,
        },
      });
      if (result.data?.updateBoard._id === undefined) {
        alertError("요청이 잘못되었습니다");
        return;
      }
      success("수정");
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alertError(error.message);
      }
    }
  };

  const onChangeFileUrl = (url: string, index: number): void => {
    const NewArr = [...images];
    NewArr[index] = url;
    setImages(NewArr);
  };

  const onChangeContent = (value: string) => {
    if (value === "<p><br></p>") {
      value = "";
    }
    setValue("contents", value);
    void trigger("contents");
  };

  return {
    onClickAddress,
    onChangeFileUrl,
    onClickEdit,
    onClickSubmit,
    handleComplete,
    onToggleModal,
    onChangeZipCode,
    onChangeAddress,
    isOpen,
    images,
    zipcode,
    address,
    register,
    formState,
    setValue,
    handleSubmit,
    onChangeContent,
  };
};
