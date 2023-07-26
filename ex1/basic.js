// {
//     var exam = {kor :10, eng:20, math:30}
//     console.log(exam[0])
//     console.log("---------------------------------------------------"); 
//     for(var att in exam)
//         console.log(att + ":" + exam[att]); //att는 속성값을 반환해줌(kor eng math)
//                                             //값 호출방법 exam.kor(안됨), exam["kor"], exam[att]
//     console.log("---------------------------------------------------"); 


//     // for(var value of exam)  //객체에서는 사용못함 배열에서만 사용가능.
//     //     console.log(value);


//     console.log("==========================================="); 



//     var names = [,"철수", "영희", "맹구", , "동천"];
//     for(var i=0; i<names.length;i++)
//         console.log(names[i]);
//     console.log("---------------------------------------------------"); 
//     for(var i in names)//undefined는 출력하지않고 truesy값만 출력함.
//         console.log(names[i]);
//     console.log("---------------------------------------------------"); 
//     for(var name of names)
//         console.log(name);
//     console.log("---------------------------------------------------"); 
// }
// console.log("---------------------------------------------------"); 

// NaN, Infinity: Global Property(=속성)
{


    var x = Infinity
    console.log(Infinity-100000)//=Infinity
    console.log(Number.MAX_VALUE)//=1.7976931348623157e+308
    var y = Math.pow(100 , 10)//100^10
    console.log(y)




    var x= 3* 'a'
    console.log(x)//=Nan
    console.log(typeof x)
    console.log(x==NaN)//false
    console.log(x===NaN)//false
    console.log(isNaN(x))//true. 너 NaN이니?라는 함수

}


// console.log("---------------------------------------------------"); 
// //Nullish연산자(??)
// {

//     var kor = null ?? 10//null로만 기본값을 만들고싶을때
//     console.log(kor)//
//     var kor = false ?? 10
//     console.log(kor)// ??연산자는 null일떄만이다. false는 null이아니므로 kor=false가됨
//     var kor = false || 10//or연산자는 트루찾기이므로 kor=10
//     console.log(kor)

//     var result;
//     result = 'Cat' || 'Dog' || 'Dragon'//트루찾기이므로 Cat
//     console.log(result)


//     var kor=13;
//     var eng=9;
//     var math=9;
//     var valid = kor && eng && math//각변수가 모두 초기화되어있으므로 trusey이고
//                                   //math가 초기화된다
//     console.log(valid)//math에있는 9가된다.

//     if(valid)
//         console.log("모든값이 입력됨")
//     else
//         console.log("입력되지않은값이 존재")//이런데다가 사용한담. 사용처 필기


//     // var age = window.prompt("나이를 입력하세요")//window는 생략가능.
//     // age = age ||10 //나이입력을하면 입력한값으로, 입력하지않았으면 10으로 초기화
//     // console.log(age)

//     var res = null|| 0 || undefined || '' || 'aa' || ' '|| 3 || 'hello'
//     console.log(res)//=aa 첫 트루시값

//     var o5 = 'Cat' || 'Dog'//||에 양항에 넌불린값이 쓰였을떄 처음만난 트루씨값을 반환한다.
//     console.log(o5)

// }
// //연산자 Operatiors
// {  
// var result = 3.5+"2"//3.52 숫자가 문자형이됨
// console.log(result)


// var result = 32>"4"//true. 4 문자가 숫자가됨.
// console.log(result)


// var result = 32-"4"//28. 문자가 숫자가됨.
// console.log(result)

// var result = "32">"4"//문자열로써 비교를한다. 탐색기정렬상 32가 위에있으니 4문자가 더큼. 폴더 들어가면 정렬순서생각해봐.앞에잇는게 작은것
// console.log(result)//false

// var result = 3.5-"A" //NAN:Not a Number.숫자문자가 아닐떄 나는 에러문구.
// console.log(result)     

// var result = 3.5-"2"//1.5 문자가 숫자가됨.
// console.log(result)

// console.log("---------------------------------------------------");
//  }   




// //JSON
// { 
//     console.log(window.JSON)
//     var member= {id:1, username:"dragon", password:"111" } 
//     var json = JSON.stringify(member)// (js객체를 제이슨화한다.)
//     console.log(json)

//     //JSON데이터는 문자열이기때문에  문자열이라고 명시를해줘야함 (''로 감싸줘야함)
//     var str= '{\"id\":1, \"username\":\"newlec\", \"password\":\"111\" } '//JSON표기
//     var member = JSON.parse(str)//제이슨 문자열을 인자로 받고 결과값을 자바스크립객체로 변환
//     console.log(member)//{id: 1, username: 'newlec', password: '111'}:js의 객체화가되어사나옴. 
//                 //js객체화가 되면 .이나 []을이용해 객체의 속성에 접근할수있음.
//     console.log(member.username)//==newlec

//     var str= '{"id":1, "username":"newlec", "password":"111" } '//JSON표기
//     var member = JSON.parse(str)//제이슨문자열을 긁어올때 JSON함수를 쓴다.
//     console.log(member)
//     console.log(member.username)
    
// // 아래 코드를 한줄에 그냥 써봣을떄 에러나나 안나나를 살펴보자
// //     [1,2,3]//에러안남
// //     {"id":1, "username":"newlec", "password":"111"}//에러남
// //     ( {"id":1, "username":"newlec", "password":"111"})//()에 넣어줫더니. 에러안남 ,바로 아래줄 예제
// // eval을 쓰려면 "" 또는 '' 내부에 적힌 문자열을 한줄로 쳣을떄 에러가 없어야한다.

//     var str = '({"id":1, "username":"newlec", "password":"111"})'//문자열 객체(위부꺼.제이슨형식)
//     var member = eval(str)
//     console.log(member.username)//제이슨객체화를 하여 .을 사용하여 속성에 접근가능해짐

//     var str= "[3,4,2,3]"//배열이 아니라 문자열임 쌍따옴표안에잇잖아
//     console.log(str[2])
//     var list = eval(str)
//     console.log(list[2])
//     console.log(list)
//     // eval(str) 문자열 그대로를 읽어온다.[3,4,2,3]
//     // console.log(str)
// }
// {
//   var code = "var x = 30;";
//   eval(code);
//   console.log(x)   
// }

// 위에부터 0714 아래는 0713
// console.log("---------------------------------------------------");
// {
//     var exam = {kor:10, "eng":30, "ma th":90}//스페이스가 있으면  ""쓰는 선언만 사용가능.{}한쌍이니까 객체1개 속성이 3개
//     console.log(exam["ma th"]); 
//     console.log(exam.kor);

//     var nums = [1,2,3,4,5]
//     console.log(nums)

// }

// console.log("---------------------------------------------------");




// {
//     //object property mani..
//     var exam = new Object()

//         //다양한 선언방식들
//     exam.kor = 30
//     exam["eng"] = 40
//     var colName = "math"
//     exam[colName] = 50

//     console.log(exam["kor"])
//     console.log(exam.eng)
//     console.log(exam.math)
// console.log("---------------------------------------------------");
// //object basic

//     var exam = new Object()
//     exam.kor =30//자동으로 kor가 만들어지고 거기다 초기화한거구나
//     console.log(exam)
//     exam.eng =40
//     console.log(exam)
//     exam.math =50
//     console.log(exam)

//     console.log(exam.kor)
// }
// console.log("---------------------------------------------------");






// //array data struture
// {

//     //array manipulation
//     var nums = new Array(1, 2, 3, 4, 5, 6)
//     console.log(nums)
//     nums.splice(3, 1, new Array(7, 8, 9, 10))//3번쨰인덱스부더 1개 짜르고 new Array대입
//     console.log(nums)
//     //숫자 2(인덱스1)를 100으로 수정하기
//     var nums = new Array(1, 2, 3, 4, 5, 6)
//     console.log(nums)
//     nums.splice(1, 1, 100)
//     console.log(nums)


//     //queue :FiFO( First In First Out),선입후출
//     var nums = new Array();
//     nums.push("그저께 산 바나나")
//     console.log(nums)
//     nums.push("어제 산 바나나")
//     console.log(nums)
//     nums.push("오늘 산 바나나")
//     console.log(nums)

//     var banana = nums.shift()//가장 안에있던거 밀어내서 저장하고
//     console.log(banana)

//     console.log(nums)


//     //stack : LIFO,선입선출
//     var nums = new Array();
//     nums.push(1);
//     nums.push(21);
//     nums.push(30);
//     nums.push(19);

//     console.log(nums);

//     var outNum = nums.pop();
//     console.log(outNum);
//     console.log(nums);


// }
//Array
// {

// var nums = new Array();
// nums[3]=10;//인덱스 0,1,2번 제치고 바로 3번에 값을 초기화한것, 길이가 4가된다.

// console.log(nums);
// console.log(nums[0]);//속성은잇고 값이 없을때 회색 undefined
// console.log(typeof nums[0]);//undefined
// console.log(nums.length);

// var nums = new Array(5, 10, 21, "hello", new Array(2,3,4));
// console.log(nums[4][1]);//3
// console.log(nums[4]);
// console.log(nums);

// }

// {
// var x = 5;
// var y;

// console.log(typeof x);
// console.log(typeof y);
// //초기화 되었는지를 확인하는 코드
// console.log(y=="undefined");//f,문자열을물어본거
// console.log(y==undefined);//t
// console.log(y===undefined);//t
// console.log(x===Number);//f

//}
// console.log("---------------------------------------------------");
// {
// var x = 3;
// var y = 3;//new Number(3);

// console.log(x);
// console.log(y);

// console.log(x==y);//true박스에 들어있는 값을 비교하는 연산
// console.log(x===y);//true박스가 같은지를 비교하는 연산, 참조하는게 같은지를 보는가보다
// }