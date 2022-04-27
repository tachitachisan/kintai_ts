export const AttendanceTimeSum = (props: { monthAttendanceTime: string[] }) => {
    const { monthAttendanceTime } = props;

    let attendanceTimeSum = 0;
    monthAttendanceTime.map((attendanceTimeText: string) => {
        attendanceTimeSum += parseFloat(attendanceTimeText);
    });

    return (
        <p>
            今月の合計勤務時間：{attendanceTimeSum}時間
        </p>
    );
};