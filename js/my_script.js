// 1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
// Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.

document.write("1. Создать функцию calculate(operand1, operand2, sign):");
document.write("<br/><br />");

var operand1;
var operand2;
var sign;

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function operandFirst () {
    operand1 = +prompt("1.1.Введите первое число: ");
    while (isNaN(operand1) || operand1 == '' ) {
        alert("Введено не число. Пожалуйста введите число.");
        operandFirst();
    }
}

function operandSecond () {
    operand2 = +prompt("1.3.Введите второе число: ");
    while (isNaN(operand2) || operand2 == '' ) {
        alert("Введено не число. Пожалуйста введите число.");
        operandSecond();
    }
}

function operandSign () {
    sign = prompt("1.2.Введите знак арифметической операции: + - * /");
    while (sign != "+" && sign != "-" && sign != "*" && sign != "/" ) {
        alert("Не является знаком арифметической операции.\nВведите знак арифметической операции: + - * /");
        operandSign();
    }
}

operandFirst ();
operandSign ();
operandSecond ();
var result;

switch (sign) {
    case "+":
        result = add(operand1, operand2);
        break;
    case "-":
        result = sub(operand1, operand2);
        break;
    case "*":
        result = mul(operand1, operand2);
        break;
    case "/":
        result = div(operand1, operand2);
        break;
    default:
        document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.</p>");
}

document.write("Условие: " + operand1 +sign + operand2);
document.write("<br/><br />");
document.write("Результат операции: " + result);
document.write("<br/><br/><br/>");


// 2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем

document.write("2.Создать функцию, возводящую число в степень");
document.write("<br/><br />");

function number () {
    operand1 = +prompt("2.1.Введите число: ");
    while (isNaN(operand1) || operand1 == '' ) {
        alert("Введено не число. Пожалуйста введите число.");
        operandFirst();
    }
}

function extend () {
    operand2 = +prompt("2.2.Введите степень в которую необходимо возвести: ");
    while (isNaN(operand2) || operand2 == '' ) {
        alert("Введено не число. Пожалуйста введите число.");
        operandSecond();
    }
}

number ();
extend ();

function numberExtend(a, b) {
    return Math.pow(a, b)
};
document.write("Число " +operand1 +" в степени " +operand2 +" равно: "  + numberExtend(operand1, operand2));
document.write("<br/><br/><br/>");

// 3.  Создать игру "Камень-Ножницы-Бумага".
//         Выбор компьютера определяется строкой:  
//         "var computerChoice = Math.random();
//         alert(computerChoice);".
//         Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.

document.write("3.  Создать игру 'Камень-Ножницы-Бумага'.");
document.write("<br/><br/>");

var a = "Камень";
var b = "Ножницы";
var c = "Бумага";
var game = [a,b,c];

var computerChoice;
var userChoice;


function gameComputer () {
    computerChoice = Math.floor(Math.random()*3);
    document.write("Выбор компьютера: " +game[computerChoice]);
    document.write("<br/>");
}

function gameUser () {
    userChoice = +prompt("3.1. Компьютер принял решение, что выберешь ты?\n1.Камень\n2.Ножницы\n3.Бумага\nВведи число от 1 до 3:");
    while (isNaN(userChoice) || userChoice == '' ) {
        alert("Введено не число. Пожалуйста введите число.");
        operandSecond();
    }
    document.write("Твой выбор: " +game[userChoice-1]);
    document.write("<br/>");
}

do {
gameComputer ();
gameUser ();

if (userChoice == 1){
    switch (computerChoice) {
        case 0:
            alert("Ничья! Видимо ты жульничал.");
            document.write("Ничья! Видимо ты жульничал.");
            document.write("<br/><br/>");
            break;
        case 1:
            alert("Ты выиграл! Так держать!");
            document.write("Ты выиграл! Так держать!");
            document.write("<br/><br/>");
            break;
        case 2:
            alert("Ты проиграл! Слабачек, попробуй еще.");
            document.write("Ты проиграл! Слабачек, попробуй еще.");
            document.write("<br/><br/>");
            break;   
    }
}
else if (userChoice == 2){
    switch (computerChoice) {
        case 0:
            alert("Ты проиграл! Слабачек, попробуй еще.");
            document.write("Ты проиграл! Слабачек, попробуй еще.");
            document.write("<br/><br/>");
            break;
        case 1:
            alert("Ничья! Видимо ты жульничал.");
            document.write("Ничья! Видимо ты жульничал.");
            document.write("<br/><br/>");
            break;
        case 2:
            alert("Ты выиграл! Так держать!");
            document.write("Ты выиграл! Так держать!");
            document.write("<br/><br/>");
            break;   
    }
}
else {
    switch (computerChoice) {
        case 0:
            alert("Ты выиграл! Так держать!");
            document.write("Ты выиграл! Так держать!");
            document.write("<br/><br/>");
            break;
        case 1:
            alert("Ты проиграл! Слабачек, попробуй еще.");
            document.write("Ты проиграл! Слабачек, попробуй еще.");
            document.write("<br/><br/>");
            break;
        case 2:
            alert("Ничья! Видимо ты жульничал.");
            document.write("Ничья! Видимо ты жульничал.");
            document.write("<br/><br/>");
            break;   
    }
}
var repeater = confirm("Хочешь сыграть еще раз?");
} while (repeater);
document.write("<br/>");

// 4. Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.
document.write("4. Напишите функцию, которая возвращает n-е число Фибоначчи.");
document.write("<br/><br/>");
var num = +prompt("4.1. Введи значение n для вычисления числа Фибоначи:")
var result;
var f1 = 0;
var f2 = 1;
function fib(n) {
    if (n<=1){
        result = n;
    }
    else{
        for (var i=2; i <= n; i++ ){
            result = f1 + f2;
            f1 = f2;
            f2 = result;
        }
    }
}
fib(num);
document.write("При значении n = " +num +" число Фибоначчи будет равно: " +result);