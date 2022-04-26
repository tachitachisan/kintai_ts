import { SetStateAction, useState } from 'react'
import { Header } from "./components/Header";
import { MonthAttendance } from "./components/MonthAttendance";
import { Title } from "./components/Title";
import { InputMonth } from "./components/InputMonth";
import "./styles.css";

function App() {
  const [targetYear, setTargetYear]=useState("");
  const [targetYearText, setTargetYearText]=useState("");
  const [targetMonth, setTargetMonth]=useState("");
  const [targetMonthText, setTargetMonthText]=useState("");
  const [monthAttendance, setMonthAttendance] = useState<string[]>([]);

  const onChangeYearText = (event: { target: { value: SetStateAction<string>; }; }) => setTargetYearText(event.target.value);
  const onChangeMonthText = (event: { target: { value: SetStateAction<string>; }; }) => setTargetMonthText(event.target.value);
  
  const onClickDecision = () => {
    let targetMonthDays;
    if (targetMonthText === "" || targetYearText === "") return;
    setTargetMonth(targetMonthText);
    setTargetYear(targetYearText);
    targetMonthDays=monthDays(targetYearText, targetMonthText);
    const arrAtt:string[]  = new Array(targetMonthDays).fill("未入力");
    setMonthAttendance(arrAtt);
  };
  const onClickAttendance = (index:number) =>{
    const newMonAtt:string[] = [...monthAttendance];
    newMonAtt[index]="出勤";
    setMonthAttendance(newMonAtt);
  }
  const onClickHoliday = (index:number) =>{
    const newMonAtt:string[]  = [...monthAttendance];
    newMonAtt[index]="休暇";
    setMonthAttendance(newMonAtt);
  }

  //年と月からその月の日数を返す関数
  const monthDays = (targetYear:string, targetMonth:string)=>{
    return new Date(parseInt(targetYear, 10), parseInt(targetMonth, 10), 0).getDate();
  }

  return (
    <>
      <Header/>
      <InputMonth
        targetMonth={targetMonthText}
        onChangeMonthText={onChangeMonthText}
        targetYear={targetYearText}
        onChangeYearText={onChangeYearText}
        onClick={onClickDecision}
      />
      <Title
        targetYear={targetYear}
        targetMonth={targetMonth}
      />
      {(targetMonth!=="" && targetYear!=="") && (
        <MonthAttendance
          monAtt={monthAttendance}
          onClickAttendance={onClickAttendance}
          onClickHoliday={onClickHoliday}
        />
      )}
    </>
  );

}

export default App
