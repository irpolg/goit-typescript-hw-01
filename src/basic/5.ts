// Типізуйте функцію isWeekend яка приймає день тижня 
// з enumDayOfWeek і повертає boolean значення, 
// що вказує, чи це день робочий чи вихідний.
// enum DayOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday
// }
// const isWeekend = (day) => {
// }
//Enum (перечисление) - в ТС нова синтаксична конструкція - 
//набір логічно пов'язаних констант - як числа, так і рядки.

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Saturday || 
           day === DayOfWeek.Sunday;
}