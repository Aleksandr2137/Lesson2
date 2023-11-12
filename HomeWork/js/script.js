// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// let test = Number(prompt("Set values 1, 0, -3"))

// console.log((test > 0)?console.log(true):console.log(false))


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
// let a = "test"
// let b = "qwerty"
// let c = true
// a=="test"?console.log(true):console.log(false)
// b=="test"?console.log(true):console.log(false)
// c=="test"?console.log(true):console.log(false)


// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let i = 0
// while (i<3){
//     let testVar = Number(prompt("type 1, 10, 13"))
//     console.log(testVar>10?(testVar-5):(testVar+5))
//     i++;
// }


//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// while (true){
//     let prom = prompt("Month?")
//     let numb = Number(prom) 
//     if(numb > 0 || numb <= 12){
//         switch (numb) {
//             case 1:
//                 alert("Jan");
//                 break;
//             case 2:
//                 alert("Feb")
//                 break;
//             case 3:
//                 alert("Mar")
//                 break; 
//             case 4:
//                 alert("Mar")
//                 break;
//             case 5:
//                 alert("Apr")
//                 break;
//             default:
//                 alert("value is incorrect");
//                 break;
//         }
//     }else if(prom == "end"){
//         alert("Cycle is ended")
//         break;
//     }
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел



// while(true){
//     let number = Number(prompt("Enter 3 digit numder"))
//     let len = Number(String(number).length)
//     let calcs = Math.trunc(number / 100) + Math.trunc((number / 10) % 10) + Math.trunc(number % 10)

//     if (len != 3){
//         alert("Enter exectly 3 digit number")
//         }else if(len === 3){
//             alert(calcs)    
//             console.log(calcs)
//             break
//     }

// }

