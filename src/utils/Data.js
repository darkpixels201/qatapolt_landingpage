export const GetMonthData = ( month ) => {
  return month == 1
    ? "Jan"
    : month == 2
    ? "Feb"
    : month == 3
    ? "March"
    : month == 4
    ? "April"
    : month == 5
    ? "May"
    : month == 6
    ? "June"
    : month == 7
    ? "July"
    : month == 8
    ? "August"
    : month == 9
    ? "Sep"
    : month == 10
    ? "Oct"
    : month == 11
    ? "Nov"
    : month == 12
    ? "Dec"
    : "";
};