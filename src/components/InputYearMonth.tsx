export const InputYearMonth = (props: { targetMonth: any; onChangeMonthText: any; targetYear: any; onChangeYearText: any; onClick: any; }) => {
  const { targetMonth, onChangeMonthText, targetYear, onChangeYearText, onClick } = props;
  return (
    <div className="input-area">
      <label>入力対象年月：
        <input
          placeholder="年"
          value={targetYear}
          onChange={onChangeYearText}
        />
        年</label>
      <label>
        <input
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