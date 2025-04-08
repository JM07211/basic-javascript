let username = "김재명";
const userage = 35;
console.log("🚀 ~ userage:", userage)
console.log("변경 전", username)

username = "JM"
console.log("변경 후", username)


console.log("unsername type", typeof username)
console.log("unserage type", typeof userage)

const bool = true
console.log("🚀 ~ bool:", bool)
console.log("bool type", typeof bool)

let today;
console.log("🚀 ~ today:", today,typeof today)

const a = null;
console.log("🚀 ~ a:", a, typeof a)

function helloworld() {
//  실행시킬 코드
    console.log("Hello World!")
}

helloworld()

 function greeting() {
    // username; 매개변수(parameter)
    console.log("반갑습니다.", username,"님")
 }

greeting()
 //  JM은 후츠릿: 인자(argument)

 //미션
// add라는 함수를 만들어서 2개의 숫자를 받아와서 두 숫자의 합을 console에 찍는 함수 만들기

function add(num1, num2) {
    console.log("🚀 ~ add ~ num1:", num1)
        result = num1 + num2
    console.log("두 숫자의 합은", result,"입니다!")
    console.log(`두 숫자의 합은 ${result}입니다!`)
    return result;
}

function double(num) {
    return num*2;
}

const sum = add(10,20);
const doubleResult = double(sum);