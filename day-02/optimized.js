const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];

// 131 puntos
function countHours (year, holidays) {return holidays.reduce((acc, date)=>acc+([1, 2, 3, 4, 5].includes(new Date(year, (Number(date.split("/")[0]) - 1),Number(date.split("/")[1])).getDay())?2:0),0)}

console.log(countHours(year, holidays));
