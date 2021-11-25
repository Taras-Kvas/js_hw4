// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок

// function plosha(a, b) {
//     let res = a * b;
//     return res;
// }
// let result = plosha(10, 20);
// document.write(result);

// function kolo(r) {
//     let radius = r * 2;
//     let s = 3.14 * radius;
//     return s;
// }
// let result = kolo(15);
// document.write (result)

// function calc(h, r) {
//     let s = 2 * 3.14 * r;
//     let a = s * h;
//     return s;
// }
// let result = calc(15, 9);
// document.write (result);

// let array = [1,3,4,5,6,7,];
// function show (array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i]);
//     }
// }
// show (array)

// function text (a) {
//     document.write (`<p>${a}</p>`)
// }
// text ('Taras taras taras taras');

// function list (a) {
//     document.write (`<ul>`);
//     document.write (`<li>${a}</li>`)
//     document.write (`<li>${a}</li>`)
//     document.write (`<li>${a}</li>`)
//     document.write (`</ul>`);
// }
// list ('Taras');

// function list (a, b) {
//     document.write (`<ul>`);
//     for ( i = 0; i < b; i++) {
//         document.write (`<li>${a}</li>`)
//     }
//     document.write (`</ul>`);
// }
// list ('taras', 3);

// let array = [true, 3, 5, 'taras', false];
// function f (array) {
//     document.write (`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write (`<li>${array[i]}</li>`)
//     }
//     document.write (`</ul>`)
// }
// f (array);

// let array = [{id:1, name: 'Taras', age: 19}, {id:2, name: 'Roma', age: 25}, {id:3, name: 'Endry', age: 22},]
// function f (array) {
//     document.write (`<ul>`)
//     for (const arrayElement of array) {
//         document.write (`<div>${arrayElement.id}.${arrayElement.name}  ${arrayElement.age}</div>`)
//     }
//     document.write (`</ul>`)
// }
// f (array);