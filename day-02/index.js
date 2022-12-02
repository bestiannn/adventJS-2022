const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD

function countHours(year, holidays) {
  const validDays = [1, 2, 3, 4, 5];
  let totalHours = 0;

  for (const date of holidays) {
    const month = Number(date.split("/")[0]) - 1;
    const day = Number(date.split("/")[1]);

    const fullDay = new Date(year, month, day);

    if (validDays.includes(fullDay.getDay())) {
      totalHours += 2;
    }
  }

  return totalHours;
}

console.log(countHours(year, holidays));
