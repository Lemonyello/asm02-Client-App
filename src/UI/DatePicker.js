import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DatePicker = ({ setSelectedDate, className }) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const onChangeDateHandler = (ranges) => {
    // show selected date on date picker
    setSelectionRange({
      startDate: new Date(ranges.selection.startDate),
      endDate: new Date(ranges.selection.endDate),
      key: "selection",
    });

    // show selected date on date input
    setSelectedDate(
      `${ranges.selection.startDate
        .toLocaleString("en-GB")
        .slice(0, 10)} to ${ranges.selection.endDate
        .toLocaleString("en-GB")
        .slice(0, 10)}`
    );
  };

  return (
    <DateRange
      editableDateInputs={true}
      moveRangeOnFirstSelection={false}
      className={className}
      minDate={new Date()}
      onChange={onChangeDateHandler}
      ranges={[selectionRange]}
    />
  );
};

export default DatePicker;
