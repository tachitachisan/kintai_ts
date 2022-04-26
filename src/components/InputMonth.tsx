export const InputMonth = (props: { targetMonth: any; onChangeMonthText: any; targetYear: any; onChangeYearText: any; onClick: any; }) => {
  const { targetMonth, onChangeMonthText, targetYear, onChangeYearText, onClick} = props;
  console.log(props);
  return (
    <div className="input-area">
      <label>
      <input className="inputYear"
        // disabled={disabled}
        placeholder="年を入力"
        value={targetYear}
        onChange={onChangeYearText}
      />
      年</label>
      <label>
      <input  className="inputMonth"
        // disabled={disabled}
        placeholder="月を入力"
        value={targetMonth}
        onChange={onChangeMonthText}
      />
      月</label>
      <button onClick={() => onClick()}>
        決定
      </button>
    </div>
  );
};