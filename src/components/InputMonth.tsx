import React from "react";
// import {RouteComponentsProps} from 'react-router-dom';

// type Props = 


export const InputMonth = (props: { month: any; onChangeMonthText: any; year: any; onChangeYearText: any; onClick: any; }) => {
  const { month, onChangeMonthText, year, onChangeYearText, onClick} = props;
  console.log(props);
  return (
    <div className="input-area">
      <input
        // disabled={disabled}
        placeholder="年を入力"
        value={year}
        onChange={onChangeYearText}
      />
      <input
        // disabled={disabled}
        placeholder="月を入力"
        value={month}
        onChange={onChangeMonthText}
      />
      <button onClick={() => onClick()}>
        決定
      </button>
    </div>
  );
};