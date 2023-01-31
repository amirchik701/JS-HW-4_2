// do {
//     var a = +prompt('Введите число')
// } while (isNaN(a) || a == 0);

// do {
//     var b = prompt('Введите число')
// } while (b == '');

// do {
//     var c = prompt('Введите число')
// } while (c == '');


// for (let i = 0; i < a; i++) {

//     c = i == 0 ? c : b + c;

//     console.log(c);

// }


/* Функции */

 /* func() */


//  let func = function () {
//      let res = 5 + 5;
//      console.log(res);
//  }

//  func()
//  func()
//  func()


//  func()
//  func()
//  func()
//  func()




// let a = +prompt('Введите первое число');
// let b = +prompt('Введите второе число');

/* Декларативный */

// function func(num, num2) {

//     let res = num + num2;   /* res = 1000 ? */
//     console.log(res);
//     // return res

// }


// function foo(x, y) {
//     let z = x + y;
//     return z;
// }

// func(foo(200, 500), 300);

// console.log(func());


// func();
// func();


/* Math.random()  - выдаёт рандомное число от 0 до 0,99999999 */
/* Math.floor() - Округляет число в меньшую сторону */
/* Math.ceil(5.1) - Округляет в большую сторону */
/* Math.round(5.6) - Округляет как в математике */


// function rand() {
//     return Math.floor(Math.random() * 16)
// }
// console.log(rand());


// let a = +prompt('Введите минимальное число');
// let b = +prompt('Введите Максимальное число');


// function random(min, max) {
//     return Math.floor(Math.random() * (max + 1 - min) + min)
// }

// for (let i = 0; i < 3; i++) {
//     let number1 = random(a, b),
//         number2 = random(a, b);
//     let pr = +prompt(number1 + ' + ' + number2);
//     let answer = pr == (number1 + number2) ? 'Молодец, Так держать!' : 'Не получилось, ну ничего, страшного... Тяу Тяу Тяу Тяу'
//     alert(number1 + ' + ' + number2 + ' = ' + (number1 + number2) + ' Ваш ответ: ' + pr + '---->> ' + answer)
// }


















// do {
//     var name = prompt('Введите имя:')
// } while (!isNaN(name) || name == null || name == '');

// do {
//     var years = +prompt('В каком году родились?')
// } while (isNaN(years) || years == null || years == '');

// do {
//     var thisyear = +prompt('Укажите нынешний год ')
// } while (isNaN(thisyear) || thisyear == null || thisyear == '');

// function func(siu) {
//     let res = thisyear - years;
//     console.log((' Ваша имя: ' + name) + (' Ваш возраст: ' + res));
// }

// func()












let kolvo = +prompt('Введите количество примеров')

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

function rSym() {
    return Math.floor(Math.random() * 5)
}

for (let i = 0; i < kolvo; i++) {
    let number1 = random(1, 10),
        number2 = random(1, 10),
        randSym = rSym(),
        correctAnswer = 0;
    
    if (randSym == 1) {
        correctAnswer = number1 + number2
        randSym = '+'
    }else if (randSym == 2) {
        correctAnswer = number1 - number2
        randSym = '-'
    }else if (randSym == 3) {
        correctAnswer = number1 * number2
        randSym = '*'
    }else if (randSym == 4) {
        correctAnswer = number1 / number2
        randSym = '/'
    }
    
    
    
    let pr = +prompt(number1 + randSym + number2);
   
    alert(correctAnswer == pr ? ' Ваш ответ верный ' + pr : ' Ваш ответ не верный ' + pr + ' Привильный ответ ' + correctAnswer)
}





















// let a = 10
// let b = 3

// alert(a % b )


// let a = +prompt('введите первое число')
// let b = +prompt('введите второе число')
// let answer2 = (a % b)

// if (answer2 != 0) {
// 	alert('Делится с остатком ' + answer2);
// } else {
// 	alert('Делится, результат деления: ' + (a / b));
// }





















    










