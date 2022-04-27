export const MonthAttendance = (props: { monthAttendance: any; onClickAttendance: any; onClickHoliday: any; }) => {
  const { monthAttendance, onClickAttendance, onClickHoliday } = props;
  return (
    <div className="monthAttendance-area">
      <ul>
        {monthAttendance.map((attendanceText: string, index: number) => {
          return (
            <li className="dayAttendance-list">
              <span className="dayAttendance-day">{index + 1}日　 </span>
              <span className="dayAttendance-status">{attendanceText}</span>
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