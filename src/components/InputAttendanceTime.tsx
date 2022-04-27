export const InputAttendanceTime = (props: { onChangeAttendanceTimeText: any; }) => {
    const { onChangeAttendanceTimeText} = props;
    return (
        <label>勤務時間(h)
        <input
          onChange={onChangeAttendanceTimeText}
        />
      </label>
    );
  };