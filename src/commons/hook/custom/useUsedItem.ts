import { useForm } from "react-hook-form";
import { useMutationCreateUsedItem } from "../mutation/useMutationCreateUsedItem";
import { useMutationUpdateUsedItem } from "../mutation/useMutationUpdateUsedItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../components/units/shopboard/boardcomponent/UsedItemComponent.yup";
import { useState, type ChangeEvent, useEffect } from "react";
import type { Address } from "react-daum-postcode/lib/loadPostcode";
import type {
  IMutation,
  IMutationUploadFileArgs,
  IQuery,
  IUpdateUseditemInput,
} from "../../types/generated/types";
import { alertError, errorChange, success } from "../../libraries/modal";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "../../../components/commons/uploads/01/Upload01.queries";

interface IFetchUseditemArgs {
  name: string;
  remarks: string;
  contents: string;
  price: string;
  zipcode: string;
  address: string;
  addressDetail: string;
  lat: string;
  lng: string;
}

interface IUseditemArgs {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
  useditemId: string;
  lat: string;
  lng: string;
}

export const useUseditem = (arg: IUseditemArgs) => {
  useEffect(() => {
    const images = arg.data?.fetchUseditem.images;
    if (images !== undefined && images !== null) setImages([...images]);
    if (arg.isEdit) {
      setValue("name", arg.data?.fetchUseditem.name ?? "");
      setValue("remarks", arg.data?.fetchUseditem.remarks ?? "");
      setValue("contents", arg.data?.fetchUseditem.contents ?? "");
      setValue("price", String(arg.data?.fetchUseditem.price ?? 0));
      setValue(
        "address",
        arg.data?.fetchUseditem.useditemAddress?.address ?? ""
      );
      setValue(
        "addressDetail",
        arg.data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
      );
      setValue(
        "zipcode",
        arg.data?.fetchUseditem.useditemAddress?.zipcode ?? ""
      );
      setValue(
        "lat",
        String(arg.data?.fetchUseditem.useditemAddress?.lat ?? 33.450701)
      );
      setValue(
        "lng",
        String(arg.data?.fetchUseditem.useditemAddress?.lng ?? 126.570667)
      );
    }
  }, [arg.data]);

  const [images, setImages] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const [createUseditem] = useMutationCreateUsedItem();
  const [updateUseditem] = useMutationUpdateUsedItem();

  const [loadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const router = useRouter();

  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };
  const { register, trigger, setValue, formState, watch, handleSubmit } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChangeContent = (value: string) => {
    if (value === "<p><br></p>") {
      value = "";
    }
    setValue("contents", value);
    void trigger("contents");
  };

  const onChangeZipCode = (event: ChangeEvent<HTMLInputElement>) => {};
  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {};
  const onClickAddress = (): void => {
    onToggleModal();
  };
  const AddressHandle = (data: Address): void => {
    setValue("zipcode", data.zonecode);
    setValue("address", data.address);
    setValue("lat", arg.lat);
    setValue("lng", arg.lng);
    void trigger("lat");
    void trigger("lng");
    void trigger("zipcode");
    void trigger("address");
    onToggleModal();
  };

  // const onChangeFileUrl = (url: string, index: number): void => {
  //   const NewArr = [...images];
  //   NewArr[index] = url;
  //   setImages(NewArr);
  // };

  //문제 코드를 upload 파일에 합칠수 있을거 같다.
  const onChangeFileUrl = (file: File, index: number): void => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        const NewArr = [...images];
        NewArr[index] = data.target.result;
        setImages(NewArr);

        const NewFile = [...files];
        NewFile[index] = file;
        setFiles(NewFile);
      }
    };
  };

  const onClickSubmit = async (data: IFetchUseditemArgs) => {
    if (!formState.isValid) {
      alertError("입력이 올바르지 않습니다");
      return;
    }
    try {
      const urlResult = await Promise.all(
        files.map((el) => el && loadFile({ variables: { file: el } }))
      );

      const url = urlResult.map(
        (el) =>
          `https://storage.googleapis.com/${
            el.data?.uploadFile.url ? el.data?.uploadFile.url : ""
          }`
      );

      await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            useditemAddress: {
              zipcode: data.zipcode,
              address: data.address,
              addressDetail: data.addressDetail,
              lat: Number(data.lat),
              lng: Number(data.lng),
            },
            images: url,
          },
        },
      });
      success("상품 등록");
      void router.push("/shopboards/page");
    } catch (error) {
      if (error instanceof Error) {
        alertError(error.message);
      }
    }
  };

  const onClickEdit = async (data: IFetchUseditemArgs) => {
    if (!formState.isValid) {
      errorChange();
      return;
    }
    const urlResult = await Promise.all(
      files.map((el) => el && loadFile({ variables: { file: el } }))
    );

    const url = urlResult.map(
      (el) =>
        `https://storage.googleapis.com/${
          el.data?.uploadFile.url ? el.data?.uploadFile.url : ""
        }`
    );

    const currentFile = JSON.stringify(url);
    const defaultFile = JSON.stringify(arg.data?.fetchUseditem.images);
    const isChangedFile = currentFile !== defaultFile;
    if (
      data.address === "" &&
      data.addressDetail === "" &&
      data.contents === "" &&
      data.lat === "" &&
      data.lng === "" &&
      data.name === "" &&
      data.price === "" &&
      data.remarks === "" &&
      data.zipcode === "" &&
      !isChangedFile
    ) {
      errorChange();
      return;
    }
    const updateUseditemInput: IUpdateUseditemInput = {};

    if (data.name !== "") {
      updateUseditemInput.name = data.name;
    }
    if (data.remarks !== "") {
      updateUseditemInput.remarks = data.remarks;
    }
    if (data.contents !== "") {
      updateUseditemInput.contents = data.contents;
    }
    if (data.price !== "") {
      updateUseditemInput.price = Number(data.price);
    }
    if (
      data.address !== "" ||
      data.addressDetail !== "" ||
      data.zipcode !== "" ||
      data.lat !== "" ||
      data.lng !== ""
    ) {
      updateUseditemInput.useditemAddress = {};
      if (data.price !== "") {
        updateUseditemInput.useditemAddress.address = data.address;
      }
      if (data.addressDetail !== "") {
        updateUseditemInput.useditemAddress.addressDetail = data.addressDetail;
      }
      if (data.zipcode !== "") {
        updateUseditemInput.useditemAddress.zipcode = data.zipcode;
      }
      if (data.lat !== "") {
        updateUseditemInput.useditemAddress.lat = Number(data.lat);
      }
      if (data.lng !== "") {
        updateUseditemInput.useditemAddress.lng = Number(data.lng);
      }
    }
    if (isChangedFile) {
      updateUseditemInput.images = images;
    }

    if (typeof arg.useditemId === "undefined") {
      alertError("잘못된 요청입니다");
      return;
    }
    try {
      await updateUseditem({
        variables: {
          useditemId: arg.useditemId,
          updateUseditemInput,
        },
      });
      success("상품 수정");
      void router.push(`/shopboards/${arg.useditemId}`);
    } catch (error) {
      if (error instanceof Error) {
        alertError(error.message);
      }
    }
  };
  return {
    isOpen,
    onToggleModal,
    register,
    formState,
    watch,
    onChangeContent,
    onChangeZipCode,
    onClickAddress,
    onChangeAddress,
    onChangeFileUrl,
    AddressHandle,
    onClickSubmit,
    onClickEdit,
    handleSubmit,
    images,
  };
};
