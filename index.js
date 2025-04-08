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

const add = (num1, num2) =>  {
    console.log("🚀 ~ add ~ num1:", num1)
        result = num1 + num2
    console.log("두 숫자의 합은", result,"입니다!")
    console.log(`두 숫자의 합은 ${result}입니다!`)
    return result;
}

// function double(num) {
//     return num*2;
//     console.log("😆함수 종료!")
// }

const double = (num) => num*2;


const sum = add(10,20);
const doubleResult = double(sum);
console.log("🚀 ~ doubleResult:", doubleResult)

console.log("======================================")
// 조건문
const score = 55;
// if(score >= 60){
//     console.log("합격");
// } else {
//     console.log("불합격");
// }

score >= 60 ? console.log("합격") : console.log("불합격")

console.log(score >= 60 ? "합격" : "불합격")

// if(score >= 90) {
//     console.log ("A등급")
// } else if( score >= 80) {
//     console.log ("B등급")
// } else if( score >= 70) {
//     console.log ("C등급") 
// } else if( score >= 60) {
//     console.log ("D등급") 
// } else {
//     console.log ("E등급") 
// }


const checkValidText = (userInput) => {
    //유효성 체크하여 boolean값 반환
    let isValid = true;
    if(!userInput) {
        //사용자가 값을 입력한 경우
        console.log("사용자가 값을 입력하지 않음")
        isValid =  false;
        alert("값을 입력해주세요")
    } else {
        isValid = true;
        console.log("사용자가 값을 입력함")
        
    } 
    return isValid;
};

console.log("checkValidText=>", checkValidText());

if(0) {
    console.log('조건식이 true인 경우')
} else {
    console.log("조건식이 false인 경우")
}

// function add2(a, b) {
// 	return a + b;
//}

// // 여기에 화살표 함수로 다시 작성하세요.
// const add2 = (num1,num2) => {
//     result = num1 +num2
//     return result;
// } 

// console.log(add2(5, 3)); // 예상 결과: 8

// const minus = (num1, num2) => {
//     result = num1 - num2
//     return result ;
// }

// // 함수 테스트
// console.log(minus(60, 20));// 예상 결과: 40

// const introduce = (name, age) => {
//     return '안녕하세요, ' + name + '님. 당신의 나이는 ' + age + '세입니다.';
//   };
//   // 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.
//   console.log(introduce("김재명","25")  );// 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."

const orderSandwich = (type = "basic") => type === "basic" ? "🥖 + 🥬 + 🍅 + 🧀 + 🥓" : "🥖 + 🥬 + 🍅 + 🥑 + 🥒"

console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
console.log("비건 샌드위치 주문: " + orderSandwich('vegan'));

console.log("=".repeat(30));

const days0fWeek = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
console.log("🚀 ~ days0fWeek:", days0fWeek)

const tue = days0fWeek[2];
console.log("🚀 ~ tue:", tue)

const students = ["정효진","김재명","이준범","정다운","김현모"];
const me = students[students.length-1]
console.log(me)