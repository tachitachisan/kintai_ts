import { SetStateAction, useState } from 'react'
import "./styles.css";
import { Header } from "./components/Header";
import { MonthAttendance } from "./components/MonthAttendance";
import { Title } from "./components/Title";
import { InputMonth } from "./components/InputMonth";

function App() {
  const [year, setYear]=useState("");
  const [yearText, setYearText]=useState("");
  const [month, setMonth]=useState("");
  const [monthText, setMonthText]=useState("");
  const [monthAttendance, setMonthAttendance] = useState<string[]>([]);

  const onChangeYearText = (event: { target: { value: SetStateAction<string>; }; }) => setYearText(event.target.value);
  const onChangeMonthText = (event: { target: { value: SetStateAction<string>; }; }) => setMonthText(event.target.value);
  
  const onClickDecision = () => {
    let days;
    if (monthText === "" || yearText === "") return;
    setMonth(monthText);
    setYear(yearText);
    days=monthDays(yearText, monthText);
    const arrAtt:string[]  = new Array(days).fill("未入力");
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
  const monthDays = (year:string, month:string)=>{
    return new Date(parseInt(year, 10), parseInt(month, 10), 0).getDate();
  }

  return (
    <>
      <Header/>
      <InputMonth
        month={monthText}
        onChangeMonthText={onChangeMonthText}
        year={yearText}
        onChangeYearText={onChangeYearText}
        onClick={onClickDecision}
      />
      <Title
        thisYear={year}
        thisMonth={month}
      />
      {(month!=="" && year!=="") && (
        <MonthAttendance
          monAtt={monthAttendance}
          onClickAttendance={onClickAttendance}
          onClickHoliday={onClickHoliday}
        />
      )}
    </>
  );



  // const [count, setCount] = useState(0)

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>Hello Vite + React!</p>
  //       <p>
  //         <button type="button" onClick={() => setCount((count) => count + 1)}>
  //           count is: {count}
  //         </button>
  //       </p>
  //       <p>
  //         Edit <code>App.tsx</code> and save to test HMR updates.
  //       </p>
  //       <p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //         {' | '}
  //         <a
  //           className="App-link"
  //           href="https://vitejs.dev/guide/features.html"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Vite Docs
  //         </a>
  //       </p>
  //     </header>
  //   </div>
  // )
}

export default App
