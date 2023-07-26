console.log("--생성자----------------------------")
{


    function f1() {
        console.log("f1")
        console.log(this)
        this.kor = 20
    }

    var x1 = f1()//new쓰지않고 함수를 호출
    console.log("x1 : ", x1)//이렇게 호출하면 단순 함수 호출.생성자 함수의 속성과 메서드를 사용할 수 없습니다.
    //즉, f1에 반환값을 설정하지않아서 undefined
    console.log("----------------------------")
    var x2 = new f1()//이렇게 호출하면 kor=20나옴, 생성자의 함수사용가능,
    // 함수에 반환 설정이 없어도 반환함
    console.log("x2 : ", x2)


    console.log("-------------------------------")
    //  function Exam(){//생성자로써 쓰려면 명명법을 대문자로
    //     this.kor = 10
    //     this.eng = 10
    //     this.math =20

    //     this.total = function(){
    //         return this.kor + this.eng + this. math
    //     }
    //  }

    //  var exam = new Exam()
    //  console.log("total", exam.total())

    //  console.log(exam.kor) 를통해 exam.kor를 
    //바로 출력할수도있따. 속성을 은닉화해보자
    //this를  var로 고치면된다.
}
console.log("-----overload constructor(생성자함수)-----------------------")
{
    function Exam(kor, eng, math) {//생성자로써 쓰려면 명명법을 대문자로
        this.kor = kor || 0 //은닉화를 복구시킨이유는 prototype할떄 설명한다.
        this.eng = eng || 0
        this.math = math || 0

        this.total = function () {
            return this.kor + this.eng + this.math
        }
        this.avg = function () {
            return this.total() / 3
        }
    }

    var exam = new Exam();
    console.log("total", exam.total())
    console.log("avg", exam.avg())
    console.log("-----------------------------")
    var exam = new Exam(10, 20, 30)
    console.log("total", exam.total())
    console.log("avg", exam.avg())
    // console.log(exam.constructor)를 알아보자

    var exam1 = new exam.constructor(1, 2, 3)//==> var exam1=new Exam()과 같음 
    //exam의 구조를 Exam의 위치를 찾기힘들때 구조를 파악할수있다.
    console.log("total", exam1.total())//=6
    console.log("avg", exam1.avg())//=2

}
console.log("------ProtoType을 이용한 캡슐화---------------")
{
    var exam1 = new Exam(1, 1, 1)
    var exam2 = new Exam(2, 2, 2)
    console.log(exam1.total === exam2.total)//=false 다른객체다.참조가다르다.
    console.log(exam1.consturctor === exam2.constructor)//=false 구조는같지만 객체가 다르므로다름.
    console.log("-----------------------")
    console.log(exam1.constructor === Exam)//true..
    console.log(exam1.constructor)
    console.log(Exam)
    console.log("------------------------")
    console.log(Exam.prototype)



    function NewExam(){
        this.com = 0
    }

    NewExam.prototype = exam1//prototype에다가 공유하고싶은 특성을 지정한다.
                             // exam1을 NewExam이 상속받은것, exam1을 NewExam에 넣은것

    var exam3 = new NewExam()//exam3에 exam1을 상속받앗은 NewExam이 들어가는것
    // console.log(exam3.total())//exam1의함수인 total을 호출할수잇다.
    console.log(exam3)// exam1을 기반으로하여 NewExam이있는 com 속성도 추가된다 

    var exam4 = new NewExam()
    console.log(exam3.total === exam4.total)//exam1의 total을 참조하고있으므로.


    //prototype 이랑 Exam을 구별해서 공유할것은 pro에 각각은 Exam에
    function Exam(kor, eng, math) {
        this.kor = kor || 0 //은닉화를 복구시킨이유는 prototype떄문인데..왜지?
        this.eng = eng || 0
        this.math = math || 0

    }

    Exam.prototype = {//인스턴스메소드라함, 공유할부분은 prototype에 쓰고 각개체의 특징은 Exam에 넣는다.
        total: function () {// :은 객체를만들떄쓰는 JSON표기, total,avg객체를 만든것.
            return this.kor + this.eng + this.math
        },
        avg: function () {
            return this.total() / 3
        }


    }

    var exam5 = new Exam(2, 2, 2)
    var exam6 = new Exam(4, 5, 6)
    console.log(exam5.total === exam6.total)//true


}


{

}

console.log("-------객체 속성관리--------------")
{

    var nums = [];
    console.log(typeof nums)//=object 가나옴. 배열은 기본형이 아니므로 아래 형태를쓰자
    console.log(nums instanceof Array); //true
    console.log(Array.isArray(nums));

    console.log(null==undefined)
    console.log(null===undefined)

}

console.log("------프로토타입 얻기(from.객체 or 함수)---------------")

{
 function NewlecExam(){

 }

NewlecExam.prototype = exam5;//exam5을 NewlecExam에 상속함

var newExam = new NewlecExam();

console.log(newExam.__proto__);//객체를활용한 프로토찾기
console.log(Object.getPrototypeOf(newExam))//객체를활용한 프로토찾기
console.log(NewlecExam.prototype)//함수를 이용한 프로토찾기
console.log(newExam.constructor === exam5)//149번줄을 지우면 true
console.log(exam5.constructor === Exam)

// console.log(newExam.prototype.constructor)//??왜안나오지?

function Omok(){
    this.x =0;
    this.y=0;
}
console.log(Omok.prototype);
console.log(Omok.prototype.constructor);//오목에 구조체의 구조는 자기자신이다.

var omok1 = new Omok();
console.log(omok1.constructor)

Omok.prototype={}

var omok2 = new Omok();
console.log(omok2.constructor)//비어잇으니까 구조가 비어잇다고나옴.native어쩌구

}
console.log("---Inheriting-------------------------")
{
var base = {
    kor:10,
    eng:20,
    math:30
}


var exam= {
   com:10,
    __proto__:base
};
var exam2= {
    com:20,
     __proto__:base
 };


 exam2.kor=4//Shadowing 부모것을 가려버린것.쉐도잉이 일어나지않게해야함
 console.log(exam.kor, exam.eng, exam.math, exam.com)//바로 math속성을 꺼낼수잇다.
 exam.kor=3
console.log(exam2.kor, exam2.eng, exam2.math, exam2.com)

}