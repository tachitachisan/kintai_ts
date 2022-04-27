export const MonthAttendance = (props: { monthAttendance: any; onClickAttendance: any; onClickHoliday: any; onChangeAttendanceTimeText: any; monthAttendanceTime: any; onClickTimeFix: any;}) => {
  const { monthAttendance, onClickAttendance, onClickHoliday, monthAttendanceTime, onClickTimeFix} = props;
  return (
    <div className="monthAttendance-area">
      <ul>
        {monthAttendance.map((attendanceText: string, index: number) => {
          return (
            <li key={index} className="dayAttendance-list">
              <span className="dayAttendance-day">{index + 1}日　 </span>
              <span className="dayAttendance-status">{attendanceText}</span>
              <span className="dayAttendance-time">{monthAttendanceTime[index]}時間 </span>
              <button onClick={() => onClickAttendance(index)}>
                出勤
              </button>
              <button onClick={() => onClickHoliday(index)}>
                休暇
              </button>
              <button className="dayAttendance-timeButton" onClick={() => onClickTimeFix(index)}>
                勤務時間入力
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};