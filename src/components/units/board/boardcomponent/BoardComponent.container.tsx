import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import BoardWriteUI from "./BoardComponent.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardComponent.queries";
import { useRouter } from "next/router";
import type { IBoardComponent } from "./BoardComponent.type";
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import {
  success,
  errorInput,
  Error,
  errorChange,
} from "../../../../commons/libraries/modal";
import type { Address } from "react-daum-postcode/lib/loadPostcode";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./BoardComponent.yup";

export default function BoardWrite(props: IBoardComponent): JSX.Element {
  const router = useRouter();

  const [name, setName] = useState("");
  const [errName, setErrName] = useState("");
  const [password, setPassword] = useState("");
  const [errPw, setErrPW] = useState("");
  const [title, setTitle] = useState("");
  const [errTitle, setErrTitle] = useState("");
  const [content, setContent] = useState("");
  const [errContent, setErrContent] = useState("");
  const [zoneCode, setZoneCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [errAdd, setErrAdd] = useState("");
  const [youtubeUrl, setLink] = useState("");
  const [errLink, setErrLink] = useState("");
  const [images, setImages] = useState(["", "", ""]);
  const [isOpen, setIsOpen] = useState(false);

  // const { register, handleSubmit, formState } = useForm({
  //   resolver: yupResolver(schema),
  //   mode: "onChange",
  // });

  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  console.log(props.data);
  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setImages([...images]);
  }, [props.data]);

  function onChangeName(event: ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value);
    setErrName("");
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
    setErrPW("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>): void {
    setTitle(event.target.value);
    setErrTitle("");
  }

  function onChangeContent(event: ChangeEvent<HTMLTextAreaElement>): void {
    setContent(event.target.value);
    setErrContent("");
  }

  function onChangeAdd1(event: ChangeEvent<HTMLInputElement>): void {
    setZoneCode(event.target.value);
    setErrAdd("");
  }

  function onChangeAdd2(event: ChangeEvent<HTMLInputElement>): void {
    setAddress(event.target.value);
    setErrAdd("");
  }

  function onChangeAdd3(event: ChangeEvent<HTMLInputElement>): void {
    setAddressDetail(event.target.value);
    setErrAdd("");
  }

  function onChangeLink(event: ChangeEvent<HTMLInputElement>): void {
    setLink(event.target.value);
    setErrLink("");
  }
  const onClickAddress = (): void => {
    onToggleModal();
  };
  const handleComplete = (data: Address): void => {
    setZoneCode(data.zonecode);
    setAddress(data.address);
    onToggleModal();
  };

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const onClickSubmit = async (): Promise<void> => {
    if (name === "") {
      setErrName("이름이 올바르지 않습니다");
      // errorEmpty("이름");
    }
    if (password === "") {
      setErrPW("비밀번호가 올바르지 않습니다");
      // errorEmpty("비밀번호");
    }
    if (content === "") {
      setErrContent("내용이 없습니다");
      // errorEmpty("내용");
    }
    if (title === "") {
      setErrTitle("제목이 올바르지 않습니다");
      // errorEmpty("제목");
    }
    if (zoneCode === "" && address === "" && addressDetail === "") {
      setErrAdd("주소가 올바르지 않습니다");
      // errorEmpty("주소");
    }
    if (youtubeUrl === "") {
      setErrLink("link가 올바르지 않습니다");
      // errorEmpty("link");
    }
    if (
      name !== "" &&
      password !== "" &&
      title !== "" &&
      content !== "" &&
      zoneCode !== "" &&
      address !== "" &&
      addressDetail !== "" &&
      youtubeUrl !== ""
    ) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: name,
            password,
            title,
            contents: content,
            youtubeUrl,
            images: [...images],
            boardAddress: {
              zipcode: zoneCode,
              address,
              addressDetail,
            },
          },
        },
      });
      if (result.data?.createBoard._id === undefined) {
        Error();
        return;
      }
      success("글");
      void router.push(`/boards/${result.data?.createBoard._id}`);
    }
  };
  const onClickEdit = async (): Promise<void> => {
    const currentFile = JSON.stringify(images);
    const defaultFile = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFile = currentFile !== defaultFile;
    if (
      title === "" &&
      content === "" &&
      addressDetail === "" &&
      youtubeUrl === "" &&
      !isChangedFile
    ) {
      errorChange();
      return;
    }
    if (password === "") {
      errorInput("비밀번호");
      return;
    }
    if (typeof router.query.boardId !== "string") {
      Error();
      return;
    }
    const updateInput: IUpdateBoardInput = {};
    if (title !== "") {
      updateInput.title = title;
    }
    if (content !== "") {
      updateInput.contents = content;
    }
    if (youtubeUrl !== "") {
      updateInput.youtubeUrl = youtubeUrl;
    }
    if (zoneCode !== "" || address !== "" || addressDetail !== "") {
      updateInput.boardAddress = {};
      if (zoneCode !== "") {
        updateInput.boardAddress.zipcode = zoneCode;
      }
      if (address !== "") {
        updateInput.boardAddress.address = address;
      }
      if (addressDetail !== "") {
        updateInput.boardAddress.addressDetail = addressDetail;
      }
    }
    if (isChangedFile) updateInput.images = images;
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput: updateInput,
        },
      });
      if (result.data?.updateBoard._id === undefined) {
        Error();
        return;
      }
      success("수정");
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      Error();
    }
  };

  const onChangeFileUrl = (url: string, index: number): void => {
    const NewArr = [...images];
    NewArr[index] = url;
    setImages(NewArr);
  };

  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeAdd1={onChangeAdd1}
      onChangeAdd2={onChangeAdd2}
      onChangeAdd3={onChangeAdd3}
      onChangeLink={onChangeLink}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      onClickAddress={onClickAddress}
      onChangeFileUrl={onChangeFileUrl}
      err_add={errAdd}
      err_content={errContent}
      err_link={errLink}
      err_name={errName}
      err_pw={errPw}
      err_title={errTitle}
      isOpen={isOpen}
      isEdit={props.isEdit}
      data={props.data}
      zoneCode={zoneCode}
      address={address}
      images={images}
    />
  );
}
