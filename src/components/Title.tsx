import React from "react";

export const Title = (props) => {
    const { thisYear, thisMonth } = props;
  return (
    <p className="title">
      {thisYear}年{thisMonth}月の勤務表
    </p>
  );
};