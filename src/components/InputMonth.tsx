export const InputMonth = (props: { targetMonth: any; onChangeMonthText: any; targetYear: any; onChangeYearText: any; onClick: any; }) => {
  const { targetMonth, onChangeMonthText, targetYear, onChangeYearText, onClick} = props;
  return (
    <div className="input-area">
      <label>
      <input className="inputYear"
        placeholder="年"
        value={targetYear}
        onChange={onChangeYearText}
      />
      年</label>
      <label>
      <input  className="inputMonth"
        placeholder="月"
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