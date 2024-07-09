// Завдання 3 - Виконуйте це завдання у файлі src/generics/3.ts.
// У вас є функція merge, яка поєднує два об'єкти. 
// Використовуйте generics, щоб вказати, що ці об'єкти 
// можуть бути будь-якого типу.

// function merge (objA, objB) {
//   return Object.assign(objA, objB);
// }

// function merge<T> (objA: T, objB: T): T {
//     return Object.assign(objA, objB);
//   }

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
const merged = merge({ name: 'Alisa' }, { age: 28 });
console.log("merged>> ", merged)
export {};