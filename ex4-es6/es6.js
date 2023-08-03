{
    let x = 50
    x = 30

    console.log(x)

}
{
    // console.log(x)
    for (let i = 0; i < 5; i++);

    // console.log(i)//for문의 i는 지역변수화된것,안나옴

}
{
    let direction = 1 //북쪽//1,2,3,4,5,6,7,8
    const North = 1;
    const South = 3
    direction = North

    // North = 4

    let level = 1 // Top, M, L
    let Top = 1
    let Middle = 2

}
console.log("------------------------------------------------")


{

    let title = "ES6"
    let color = "red"
    let className = "note"

    let template = '<section class="' + className + '"> \
                    <h1 style="color:'  + color + ';">' + title + '</h1> \
                    </section>';

    let template1 = `<section class=${className}>
                        <h1 style="color:${color};">${title}</h1>
                    </section>`

    let template2 = String.raw`
    <section class=${className}> \n \n \" \` \'
         <h1 style="color:${color};">${title}</h1>
     </section>
     `;

    // console.log(template)//백틱 미사용
    // console.log(template1)//백틱 사용 . 줄모양 신경쓰기힘듬
    console.log(template2)//백틱 사용 . 줄모양이 출력하는 그대로나옴.
}


console.log("-------향상된 JSON 표기법 1 -----------------------")
{

    let kor = 40;
    let eng = 20;
    let math = 90;

    // let exam = {kor:kor, eng:eng, math:math};
    let exam = { kor, eng, math, }//속성값이 변수명과 같다면 속성키워드가 필요없다.
    console.log(exam);


    let exam1 = {
        kor, eng, math,
        // total:function(){
        //     return this.kor+this.math+this.eng
        // }
        total() {
            return this.kor + this.math + this.eng
        }
        ,
        // avg:function(){
        //     return this.total()/3
        // }
        avg() {
            return this.total() / 3
        }

    }
    console.log(exam1.total())


}

console.log("-------향상된 JSON 표기법 2 -----------------------")
{

    let kor = 40;
    let eng = 20;
    let math = 90;
    let aa = "com"
    let exam = {
        kor, eng, math,
        total() {
            return this.kor + this.math + this.eng
        },
        avg() {
            return this.total() / 3
        },
        [aa + "1"]: 60//대괄호를 이용해 속성명을 변수로 쓸수있다.
    }

    console.log(exam.com1)

}
console.log("-------Object Destructuring #1 a.k.a 포개기-----------------------")
{

    let exam = {
        kor: 10,
        eng: 20,
        math: 30,
        student: {
            name: 'lhj',
            phone: {
                man: "010-123-4567",
                girl: "010-4567-4564"
            }
        }

    }
    console.log(exam.kor, exam.eng)

    // let kor = exam.kor;
    // let eng = exam.eng
    // let {kor, eng, comm=10}=exam; //exam객체 안에 있는 속성값들중 {}안의 내용과 일치하는애가 있으면 개를 kor로 뽀갠다는것.. exam.kor 안써도됨.
    //기능2 내부안에서 속성을 만들고 초기화도할수있다..(comm)

    // console.log(kor,eng, comm)

    let { kor: korean } = exam;//exam객체에서 kor라는속성이있다면 속성명을 korean으로 뽀갠다.(속성명 변경.)
    console.log(korean)

    let { kor, student: { name, phone: { man, girl } } } = exam; // 이중뽀개기
    console.log(kor, name, man, girl)

}

console.log("-------Object Destructuring #1 a.k.a 포개기-----------------------")
{

    //배열에서 kors[1],kors[2]를  각각 kor1,kor2 ....으로 바로 담고싶을때, 

    let kors = [10, 20, 30]
    // let kor1= kors[0]
    // let kor2= kors[1]
    // let kor3= kors[2]
    let [, kor1, kor2, kor3 = 9] = kors //일대일대응한다. 대응할게 없으면 다음타자로 넘어감.
    //배열안의 순서대로의 변수명으로 kors의 배열값들이 뽀개진다
    //값초기화는 가능, 별칭지어주기는 안됨ㅋ
    console.log(kor1, kor2, kor3)//20,30,9

    let kors1 = [90, 80];
    [kor1, kor2] = kors1;
    console.log(kor1, kor2, kor3) //다른배열의값(위의 식에서 좌변)으로 초기화할때 let선언을 안하고쓴다.

}

//배열값 바꾸기가 매우 쉬워진다.
//변수 선언된것을 가지고도 뽀개기를 할수있다.
{
    let kor = 20;
    let eng = 30;

    console.log(kor, eng);

    [eng, kor] = [kor, eng]; //우측부터읽자. 우측의배열의 첫번쨰를 좌측destructig의 첫번째변수명으로 쪼갠다.결과적으로 값이 교체됨
    //배열의첫번쨰 값을 eng변수로, 두번쨰값을 kor변수로 담겠다는것, 즉 값이 교체됨(바뀜)
    console.log(kor, eng);
}

{
    let kors = [[20, 30, 40, 40, 30], [40, 30, 20, 30]]//배열을 원소로가지고있는 배열
    let [[kor1, , , ,], [kor2, , ,]] = kors;
    console.log(kor1, kor2);
}
//기존 선언된 변수들을 이용한 뽀개기
{
    let kor1, kor2, eng;

    let kors = [10, 20, 30];
    let exam = { kor: 20, eng: 30, kors };

    // {}  >>문법적으로 한 문장으로 인정안됨 ()로 묶어줘야한다.
    // []  >>문법적으로 한 문장으로 인정됨
    ({ kor: kor1, eng, kors: [, , kor2] } = exam);
    console.log(kor1, eng, kor2);
}

//07.31.월.나머지 매개변수들을 이용하기 위한 나머지변수,,,,Rest Parameter & Spread Operator 이용하기 매개 값 전달.

// {
    // function print(x, y, ...aa) {// 함수를 정의할 때 사용되는 변수를 매개변수, 이때 aa가 나머지변수

    //     console.log(x, y, aa[0], aa.length, "||", arguments[0], arguments[2], arguments.length)
    //     //출력값 :3 4 5 3 '||' 3 5 5
    // }
    // print(3, 4, 5, 6, 7)//실제로 함수가 호출될 때 넘기는 변수값을 인수(arguments)

    // console.log("--------------------------------------------")

    // function print1(nums) {
    //     console.log(nums);
    // }

    // let nums = [4, 34, 23, 12];

    // print1(nums);//[4, 34, 23, 12]
    // print(...nums);//4 34 23 2 '||' 4 23 4 (왜냐면 print함수는 매개변수를 2개만받고 3개째부터는 나머지변수로받음)

    // console.log("---사용예시---------------------------------")

    // // let nums2 = [1,3,2,nums];//그냥 nums라고하고 이중배열을 쓰고싶지않다. 배열을 다꺼내서쓰고싶다 아랫라인 ㄱㄱ
    // let nums2 = [1, 3, 2, ...nums] // spread Operator
    // console.log(nums2[3]); //출력=[1, 3, 2, 4, 34, 23, 12]:나머지변수로 배열인변수를 썻을떄.

    // console.log("---복합 예시---------------------------------")

    // function print2([x, y, z]) {//배열 nums의 값들을 순서대로 x,y,z로 뽀갰다.
    //     console.log(x, y, z);//뽀개기([])를 하지않으면 x에만 배열이 딱들어가고 y,z부분에서 undefined가 뜸!...배열은 []로 뽀갠다.
    // }
    // print2(nums);//4,34,23

//     function print3({ kor, eng, math }) {//exam객체에 대한 뽀개기. {}로 뽀갠다
//         console.log(kor, eng, math);
//     }
//     let exam = { kor: 30, eng: 20, math: 80 }
//     print3(exam);

// }

// //함수의 기본 값 설정하기
// {
//     function print(x, y = 10, z) {
//         console.log(x, y, z)
//         console.log(arguments.length);
//     }
//     print(10, undefined, 10) //null입력하면 null출력(null도 값이라고보는구나), undefined넣으면 그제서야 기본값출력됨
//     //출력값:10 10 10/ 3
//     print(1);
//     //출력값 1 10 undefined /1
//     // ---------------기본값에 함수가들어갈수잇을까? yes----------
//     function sum() {
//         return 100;
//     }
//     function print2(x, y = sum(), z = x + 1) {
//         console.log(x, y, z)
//         console.log(arguments.length);
//     }
//     print2(10, undefined, 10) //인수로 z값을 주면 입력한값 10이고, 안줬을때 x+1값이나오는것. 1 100 10 /3
//     print2(1);//1 100 2 /1
// }

// arrow function=람다표현식
{
    let nums = [20, 10, 29, 82, 39, 28, 100];
    // nums.sort();//문자로 보고 정렬을 하게되서 이상하게나옴. [10, 100, 20, 28, 29, 39, 82]

    // nums.sort(function(a,b){
    //     return a-b;
    // })
    // console.log(nums);

    nums.sort((a, b) => a-b);//위에식을 람다표현한것.오름차순정렬방법
    console.log(nums)

    // // 차이점1----arrow function은 this를 가지지않는다----그러므로 game객체를 이용할수있다.
    // let game = {
    //     x: 30,
    //     run() {
    //         setTimeout(()=>{
    //             console.log(this);//30, f
    //             this.x++;
    //             console.log(this.x)//31
    //         },1000);

    //         // setTimeout(function(){
    //         //     console.log(this);//window객체
    //         //     this.x++;
    //         //     console.log(this.x)//NaN
    //         // },1000);   
    //     }
    // };
    // game.run();


    //차이점2 arrow function에는 arguments가 없다.
    //차이점3  arrow function은 생성자로사용할수없다.(this.관련행위를 가지지않는다)
    let print = function () {
        // console.log(arguments[0], arguments[1]); ,,//출력값 2,3 잘나옴.
        console.log('normal function', this)//window객체
    }

    let print1 = () => {
        // console.log(arguments[0], arguments[1]);//에러나옴.arrow function에는 arguments가 없다.
        console.log('arrow function', this)
    }
    

    print(2, 3);//normal function, Window객체 
    new print(2, 3);//normal function, 빈객체 {}가 나옴(생성자)

    print1(2, 3)
    // new print1(2,3)//arrow function은 생성자로사용할수없다.(this.관련행위를 가지지않는다)
                    // print1 is not a constructor 라는 에러뜸

}

console.log("--------call/apply/bind------------------")
{
    // //외부에 객체를 this로 이용하는 방법. bind함수의 인자로 외부객체를 넣어준다.
    // let a = { kor: 10 }
    // let game = {
    //     x: 30,
    //     run() {
    //         setTimeout(function () {
    //             console.log(this)//{kor:10}, 즉 객체가 나옴
    //             this.x++;
    //             console.log(this.x)
    //         }.bind(a), 1000);    //하면 아래 game.run()에서 NaN이 나옴
    //     }
    // };
    // game.run();

    // -------------------

    let game1 = {
        x: 30,
        run() {
            console.log(this);//{x: 30, run: ƒ}
            setTimeout(function () {
                console.log(this)//{x: 30, run: ƒ}
                this.x++;
                console.log(this.x)//31
            }.bind(this), 1000);    //하면 아래 game1.run()에서 NaN이 나옴
        }
    };
    // game1.run();

console.log("--------------------")
    let f = function (a,b) {
        console.log(a,b)
        console.log(this)
        this.x++;
        console.log(this.x)

    };

    let game2 = {
        x:10
    }
console.log("--------------------")
    // f.call(game1);
    // f.call(game2);
    // f();
    f.call(game1, 100, 200);
    // f.call(game2);
    f.apply(game2,[100, 200])

}


console.log("--------Class 시작 8.01------------")
{
    class Exam{
        constructor(kor = 0, math=0, eng =0){
            this.kor=kor;
            this.math=math;
            this.eng=eng;
        }
        total(){
           return this.math+this.eng+this.kor
        }
    }
    let exam = new Exam(10,20,30);
    console.log(exam.total())
}
console.log("--------Strict mode------------")
// 자료형 선언안하면 윈도우객체안에서 선언된것,
{

}

console.log("--------보호모드(은닉화) & getters/setters  &  Static  & 상속  ----------")
{
    class Exam{
        #kor
        #math
        #eng
        static #count;//객체가 생성됨가 상관없이 존재한다. 마치 전역변수같은 녀석임.

        static{//static 변수를 이 블럭안에서 초기화할수잇다.
            Exam.#count=100;

        }  

        static get count() {
            return Exam.#count;
        }
        static set count(value) {
           Exam.#count=value;
        }
        


        // static getkor(){   
        //     return this.kor   //인스턴스매서드를 넘겨받지않으므로 this를 쓸수없다. 아래라인처럼 써야함
        // }
        static getkor(exam){
            return exam.#kor;
        }

        constructor(kor = 0, math=0, eng =0){
            this.#kor=kor;
            this.#math=math;
            this.#eng=eng;

            Exam.#count++;//을써주면 Exam객체가만들어질때마다 생성자가생성됨을이용해서 객체수를 파악할수있게된다.
        }
        total(){
           return this.#math+this.#eng+this.#kor
        }
        // 띄워쓰기했을때 함수인데 그냥 속성처럼 쓸수있게해준다.
        get kor(){
            return this.#kor
        }
        set kor(value){
            this.#kor=value;
        }
    }
    let exam = new Exam(10,20,30);
    let exam2 = new Exam(1,2,1);

    // console.log(exam.kor)//undefined, Exam의 class에서 변수들을 은닉화해줬으니까.
    // console.log(exam.total())

    // exam.kor++; 
    // exam.kor=30;// set kor()함수가 있어야 이게 작동하는구나
    console.log(exam.kor)
    console.log(Exam.getkor(exam))//static 을 이용할떄는 클래스를 쓴다.
    // console.log(exam.getkor())//static으로 선언한 getkor()는 전역변수이므로 exam객체랑 상관없음. 클래스 Exam를 이용해야하므로 인스턴스매서드를 넘겨받지않으므로 this를 쓸수없다.
    //윗라인 추가설명: static에 선언된 getkor()는 this를 쓸수없는이유,
    Exam.count++;
    console.log(Exam.count)

    console.log("-------- 상 속 ------------")

    class NewlecExam extends Exam{
        #com;
        constructor(kor, math, eng, com){
            super(kor, math, eng);
            this.#com=com;
        }
        total(){
            return super.total()+this.#com;
        }


    }

    let exam3 = new NewlecExam(10,10,10,10)
    console.log(exam3.total())

    console.log(typeof exam3, typeof Exam, typeof NewlecExam,)//object function function
    console.log(exam instanceof Exam, exam3 instanceof Exam,)//t t
    console.log(exam instanceof NewlecExam, exam3 instanceof NewlecExam,)//f t
    console.log(Object.hasOwn(exam.__proto__, 'total')  )
    // (a), (b) a객체가 b속성을 가지고있느냐는것

    // 자기의속성인지 물려받은속성인지를 알아보자 in:부모꺼든 자기꺼든 다나오게 ㅗ
}