export const Title = (props: { targetYear: any; targetMonth: any; }) => {
    const { targetYear, targetMonth } = props;
  return (
    <p className="title">
      {targetYear}年{targetMonth}月の勤務表
    </p>
  );
};