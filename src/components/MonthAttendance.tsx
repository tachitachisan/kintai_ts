export const MonthAttendance = (props: { monthAttendance: any; onClickStatusButton: any; monthAttendanceTime: any; onClickTimeFix: any; }) => {
  const { monthAttendance, onClickStatusButton, monthAttendanceTime, onClickTimeFix } = props;
  const statusAttendance = "出勤";
  const statusHoliday = "休暇";
  return (
    <div className="monthAttendance-area">
      <ul>
        {monthAttendance.map((attendanceText: string, index: number) => {
          return (
            <li key={index} className="dayAttendance-list">
              <span className="dayAttendance-day">{index + 1}日　 </span>
              <span className="dayAttendance-status">{attendanceText}</span>
              <span className="dayAttendance-time">{monthAttendanceTime[index]}時間 </span>
              <button onClick={() => onClickStatusButton(index, statusAttendance)}>
                {statusAttendance}
              </button>
              <button onClick={() => onClickStatusButton(index, statusHoliday)}>
                {statusHoliday}
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