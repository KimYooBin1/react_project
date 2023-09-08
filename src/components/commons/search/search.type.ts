import type { ChangeEvent, Dispatch, SetStateAction } from "react";

import type dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import type { EventValue, PresetDate } from "rc-picker/lib/interface";
export interface ISearch {
  SetKeyword: Dispatch<SetStateAction<string>>;
  refetchBoardsCount: any;
  refetch: any;
}

export interface ISearchUI {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  rangePresets:
    | PresetDate<[EventValue<dayjs.Dayjs>, EventValue<dayjs.Dayjs>]>[]
    | undefined;
  onRangeChange: (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => void;
}
