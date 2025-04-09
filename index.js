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

//학생 정보
const studnetName = "김재명";
const studentGender ="Male"
const studentAttendanceCheck = true;

const studentInfo = {
    name: "김재명",
    gender : "male",
    attendanceCherk : true,
};

const key = "name"
console.log(studentInfo.name);
console.log(studentInfo[key]); // 변수에 key값이 계속 바뀌는 경우 사용

const studentList = [
    {
        name : "정효진",
        gender : "Female",
        attendanceCherk : true
    },
    {
        name : "김재명",
        gender : "Male",
        attendanceCherk : true
    },
    {
        name : "이준범",
        gender : "Male",
        attendanceCherk : true
    },
    {
        name : "정다운",
        gender : "Male",
        attendanceCherk : true
    },
    {
        name : "김현모",
        gender : "Male",
        attendanceCherk : true
    },
    {
        name : "김다솜",
        gender : "Female",
        attendanceCherk : true
    }
];

console.log(studentList.length)
console.log(studentList[studentList.length-1].name)

// let i = 0;
// for (i=0; i < 10; i++) {
//     console.log (`반복문 ${i}번째 실행`)
// }
// console.log("반복문 끝")
// console.log("i==>",i);

for(let i = 0; i< studentList.length ; i++ ){
    console.log(`${i+1}번째 학생이름: ${studentList[i].name}`)
}

studentList.forEach((value, index, array)=>{
    console.log("🚀 ~ value:", value.name);
})//for문과 달리 개수 구할 필요 없음, 개발자 직관적임

const studentNames = studentList.map((value)=>value.name)
console.log("🚀 ~ studentNames:", studentNames)

studentNames.map((value) => value + '')

const h1El = document.querySelector(".title");
const buttonEl = document.querySelector("button")
// console.log("🚀 ~ h1El:", h1El)

const changeH1 = () =>{
    h1El.innerText = "JavaScript";
    h1El.style.color = "red"
};

buttonEl.addEventListener("click", changeH1)



console.dir(h1El)

//logical operators
const user = {
    isLoggedIn: true, // 로그인 여부
    role: "admin", // "guest","user"
    age: 18,
    hasParentalConsent : true //부모 동의 여부
};

// let canAccessAdminPage ; //관리자페이지 접근 권한  boolean타입

// if(user.isLoggedIn) {
//     if(user.role === admin){
//         //로그인이 되어있고 권한도 있는 경우
//         canAccessAdminPage = true
//     } else {
//         //로그인은 했지만 권한이 없는 경우
//         canAccessAdminPage = false;
//     }
// } else {
//     //로그인이 안된경우
//     canAccessAdminPage = false;
// }

// canAccessAdminPage = true
// console.log("🚀 ~ canAccessAdminPage:", canAccessAdminPage)

const canAccessAdminPage = user.isLoggedIn && user.role === "admin";
console.log("🚀 ~ canAccessAdminPage:", canAccessAdminPage)

console.log(canAccessAdminPage 
    ? "관리자 페이지에 적근 할 수 있습니다" 
    : "관리자 페이지에 접근 할 수 없습니다."
);

const canAccessService = user.hasParentalConsent || user.age >=18;
console.log("🚀 ~ canAccessService:", canAccessService)

const userInput = "";

if (!userInput) {
    //입력값이 비어있는 경우
    alert("입력값이 비어있습니다. 값을 입력해주세요")
}  else {
    console.log("다음 스텝으로 진행")
}

 const colors = ["red","blue"]
 
//  const [ _, secondColor] = colors;
//  console.log("🚀 ~ secondColor:", secondColor)
//  console.log(colors[0],colors[1]);

const person = {
    name : "정다운",
    mbti : "INTP",
};

const {name:userName, mbti} = person
console.log("🚀 ~ name:", userName);
console.log("🚀 ~ mbti:", mbti);

//미션
const animals = ["개","고양이","앵무새"];
//고양이와 앵무새를 구조분해 할당으로 가져와서 새로운 변수에 저장하세요.
const [ _, cat, AngMuSae] = animals;
console.log("🚀 ~ AngMuSae:", AngMuSae)
console.log("🚀 ~ cat:", cat)

const animals2 = ["하마","코뿔소"]

const copyAnimals = [...animals, "호랑이", ...animals2]
console.log("🚀 ~ copyAnimals:", copyAnimals)

const todoItem = {
    title: "밥먹기",
    description : "양갈비"
};

const newTodoItem = {...todoItem, isComplete:true, description :" 소갈비로 변경"}

console.log("🚀 ~ newTodoItem:", newTodoItem)

