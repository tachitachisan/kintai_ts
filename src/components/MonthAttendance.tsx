import React from "react";

export const MonthAttendance = (props: { monAtt: any; onClickAttendance: any; onClickHoliday: any; }) => {
    const { monAtt, onClickAttendance, onClickHoliday } = props;
    return (
      <div className="monthAttendance-area">
        <ul>
          {monAtt.map((attText:string, index:number) => {
            return (                
              <li className="dayAttendance">
              <span>{index+1}日　 </span>
              <span>{attText}</span>
              <button onClick={() => onClickAttendance(index)}>
                出勤
              </button>
              <button onClick={() => onClickHoliday(index)}>
                休暇
              </button>
            </li>
            );
          })}
        </ul>
      </div>
    );
  };