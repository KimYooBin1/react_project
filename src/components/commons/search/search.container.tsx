import SearchUI from "./search.presenter";
import _ from "lodash";
import type { ISearch } from "./search.type";
import type { ChangeEvent } from "react";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import type { TimeRangePickerProps } from "antd";
export default function Search(props: ISearch): JSX.Element {
  const getDebounce = _.debounce((value) => {
    props.SetKeyword(value);
    props.refetch({ page: 1, search: value });
    props.refetchBoardsCount({ search: value });
    console.log(value);
  }, 500);
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };

  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ): void => {
    if (dates !== null) {
      // console.log("From: ", dates[0], ", to: ", dates[1]);
      // console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
      // console.log(new Date(dateStrings[0]));
      // console.log(new Date(dateStrings[1]));
      const endDate = new Date(dateStrings[1]);
      const startDate = new Date(dateStrings[0]);
      props.refetch({
        page: 1,
        endDate,
        startDate,
      });
      props.refetchBoardsCount({
        endDate,
        startDate,
      });
    } else {
      console.log("Clear");
      props.refetch({
        page: 1,
        endDate: undefined,
        startDate: undefined,
      });
      props.refetchBoardsCount({
        endDate: undefined,
        startDate: undefined,
      });
    }
  };

  const rangePresets: TimeRangePickerProps["presets"] = [
    { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
    { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
    { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
    { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
  ];

  return (
    <SearchUI
      onChangeInput={onChangeInput}
      rangePresets={rangePresets}
      onRangeChange={onRangeChange}
    />
  );
}
