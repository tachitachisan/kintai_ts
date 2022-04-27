import { SetStateAction, useState } from 'react'
import { Header } from "./components/Header";
import { MonthAttendance } from "./components/MonthAttendance";
import { Title } from "./components/Title";
import { InputMonth } from "./components/InputMonth";
import "./styles.css";
import { InputAttendanceTime } from './components/InputAttendanceTime';
import { AttendanceTimeSum } from './components/AttendanceTimeSum';

function App() {
  const [targetYear, setTargetYear] = useState("");
  const [targetYearText, setTargetYearText] = useState("");
  const [targetMonth, setTargetMonth] = useState("");
  const [targetMonthText, setTargetMonthText] = useState("");
  const [monthAttendance, setMonthAttendance] = useState<string[]>([]);
  const [attendanceTimeText, setAttendanceTimeText] = useState("");
  const [monthAttendanceTime, setMonthAttendanceTime] = useState<string[]>([]);

  const onChangeYearText = (event: { target: { value: SetStateAction<string>; }; }) => setTargetYearText(event.target.value);
  const onChangeMonthText = (event: { target: { value: SetStateAction<string>; }; }) => setTargetMonthText(event.target.value);
  const onChangeAttendanceTimeText = (event: { target: { value: SetStateAction<string>; }; }) => setAttendanceTimeText(event.target.value);

  const onClickDecision = () => {
    let targetMonthDays;
    if (targetMonthText === "" || targetYearText === "") return;
    setTargetMonth(targetMonthText);
    setTargetYear(targetYearText);
    targetMonthDays = monthDays(targetYearText, targetMonthText);
    const arrayAttendance: string[] = new Array(targetMonthDays).fill("未入力");
    setMonthAttendance(arrayAttendance);
    const arrayAttendanceTime: string[] = new Array(targetMonthDays).fill("0");
    setMonthAttendanceTime(arrayAttendanceTime);
  };
  const onClickTimeFix = (index: number) => {
    if (attendanceTimeText === "") return;
    const newMonthAttendanceTime: string[] = [...monthAttendanceTime];
    newMonthAttendanceTime[index] = attendanceTimeText;
    setMonthAttendanceTime(newMonthAttendanceTime);
  };
  const onClickAttendance = (index: number) => {
    const newMonthAttendance: string[] = [...monthAttendance];
    newMonthAttendance[index] = "出勤";
    setMonthAttendance(newMonthAttendance);
  }
  const onClickHoliday = (index: number) => {
    const newMonthAttendance: string[] = [...monthAttendance];
    newMonthAttendance[index] = "休暇";
    setMonthAttendance(newMonthAttendance);
  }

  //年と月からその月の日数を返す関数
  const monthDays = (targetYear: string, targetMonth: string) => {
    return new Date(parseInt(targetYear, 10), parseInt(targetMonth, 10), 0).getDate();
  }

  return (
    <>
      <Header />
      <InputMonth
        targetMonth={targetMonthText}
        onChangeMonthText={onChangeMonthText}
        targetYear={targetYearText}
        onChangeYearText={onChangeYearText}
        onClick={onClickDecision}
      />

      {(targetMonth !== "" && targetYear !== "") && (
        <div>
          <Title
            targetYear={targetYear}
            targetMonth={targetMonth}
          />
          <InputAttendanceTime
            onChangeAttendanceTimeText={onChangeAttendanceTimeText}
          />
          <AttendanceTimeSum
            monthAttendanceTime={monthAttendanceTime}
          />
          <MonthAttendance
            monthAttendance={monthAttendance}
            onClickAttendance={onClickAttendance}
            onClickHoliday={onClickHoliday}
            onChangeAttendanceTimeText={onChangeAttendanceTimeText}
            monthAttendanceTime={monthAttendanceTime}
            onClickTimeFix={onClickTimeFix}
          />
        </div>
      )}
    </>
  );

}

export default App
