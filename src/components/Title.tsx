import React from "react";

export const Title = (props: { thisYear: any; thisMonth: any; }) => {
    const { thisYear, thisMonth } = props;
  return (
    <p className="title">
      {thisYear}年{thisMonth}月の勤務表
    </p>
  );
};