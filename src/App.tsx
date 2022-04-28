import { SetStateAction, useState } from 'react'
import { Header } from "./components/Header";
import { MonthAttendance } from "./components/MonthAttendance";
import { Title } from "./components/Title";
import { InputYearMonth } from "./components/InputYearMonth";
import { InputAttendanceTime } from './components/InputAttendanceTime';
import { AttendanceTimeSum } from './components/AttendanceTimeSum';
import "./styles.css";

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

  //勤務状態入力ボタン押下時の関数
  const onClickStatusButton = (index: number, status: string) => {
    const newMonthAttendance: string[] = [...monthAttendance];
    newMonthAttendance[index] = status;
    setMonthAttendance(newMonthAttendance);
  }
  //年と月からその月の日数を返す関数
  const monthDays = (targetYear: string, targetMonth: string) => {
    return new Date(parseInt(targetYear, 10), parseInt(targetMonth, 10), 0).getDate();
  }

  return (
    <>
      <Header />
      <InputYearMonth
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
          <AttendanceTimeSum
            monthAttendanceTime={monthAttendanceTime}
          />
          <InputAttendanceTime
            onChangeAttendanceTimeText={onChangeAttendanceTimeText}
          />
          <MonthAttendance
            monthAttendance={monthAttendance}
            onClickStatusButton={onClickStatusButton}
            monthAttendanceTime={monthAttendanceTime}
            onClickTimeFix={onClickTimeFix}
          />
        </div>
      )}
    </>
  );
}

export default App
