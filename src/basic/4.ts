// У вас є такі функції JavaScript:
// function showMessage(message) {
//   console.log(message);
// }
// function calc(num1, num2) {
//   return num1 + num2;
// }
// function customError() {
//   throw new Error('Error');
// }
// Як ви вкажете типи для аргументів і значень 
// цих функцій, що повертаються? TypeScript


function showMessage(message: string): void {
    console.log(message);
}
showMessage('Hello everyone!');

function calc(num1: number, num2: number): number {
    return num1 + num2;
}
calc(1, 2);

function customError(): never {
    throw new Error('Error');
}
customError();
