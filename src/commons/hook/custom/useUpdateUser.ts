import { useEffect, useState } from "react";
import useMutationUpdateUser from "../mutation/useMutationUpdateUser";
import { useQueryFetchUserLoggedIn } from "../query/useQueryFetchUserLoggedIn";
import useMutationUploadFile from "../mutation/useUploadFile";
import { alertError, success } from "../../libraries/modal";
import { useRouter } from "next/router";

interface IUpdateUserInfo {
  name: string;
  // picture: string;
}

export default function useUpdateUser() {
  const router = useRouter();

  const [updateUser] = useMutationUpdateUser();
  const [upload] = useMutationUploadFile();
  const { data: userData } = useQueryFetchUserLoggedIn();

  const [images, setImages] = useState([""]);
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const images = userData?.fetchUserLoggedIn.picture;
    setImages([images ?? ""]);
  }, [userData]);

  const onChangeFileUrl = (file: File): void => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        const NewArr = [...images];
        NewArr[0] = data.target.result;
        setImages(NewArr);

        const NewFile = [...files];
        NewFile[0] = file;
        setFiles(NewFile);
      }
    };
  };

  const onClickUpdateUser = async (data: IUpdateUserInfo): Promise<void> => {
    try {
      const result = await upload({
        variables: {
          file: files[0],
        },
      });

      await updateUser({
        variables: {
          updateUserInput: {
            name: data.name,
            picture: `https://storage.googleapis.com/${result.data.uploadFile.url}`,
          },
        },
      });
      success("정보수정");
      void router.push("/mypage");
    } catch (error) {
      if (error instanceof Error) {
        alertError(error.message);
      }
    }
  };
  return { onClickUpdateUser, onChangeFileUrl, userData, images };
}
