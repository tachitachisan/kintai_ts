export const InputAttendanceTime = (props: { onChangeAttendanceTimeText: any; }) => {
    const { onChangeAttendanceTimeText } = props;
    return (
        <label className="inputAttendanceTime">勤務時間(h)
            <input className="inputAttendanceTime-input"
                onChange={onChangeAttendanceTimeText}
            />
        </label>
    );
};