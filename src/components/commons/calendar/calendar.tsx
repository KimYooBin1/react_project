import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { Space, type TimeRangePickerProps } from "antd";
import styled from "@emotion/styled";
import { DatePicker } from "antd";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

const { RangePicker } = DatePicker;

export const SearchDate = styled(RangePicker)`
  margin-left: 50px;
  height: 50px;
`;

interface ICalendar {
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export const Calendar = (props: ICalendar) => {
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
      void props.refetch({
        page: 1,
        endDate,
        startDate,
      });
      void props.refetchBoardsCount({
        endDate,
        startDate,
      });
    } else {
      void props.refetch({
        page: 1,
        endDate: undefined,
        startDate: undefined,
      });
      void props.refetchBoardsCount({
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
    <>
      <Space direction="vertical" size={12}>
        <SearchDate presets={rangePresets} onChange={onRangeChange} />
      </Space>
    </>
  );
};
