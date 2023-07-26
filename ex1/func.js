{
    var add = new Function("x,y", "return x+y;");
    console.log(add(3, 4))
    var add = function (x, y) { return x + y; }
    console.log(add(3, 4))
    // function add(x, y){return x+y}
    // console.log(add(3,4))
}
console.log("---------------------------------------------------");
{

    var add = function () {
        console.log("arguments:" + arguments.length)
        var x = arguments[0]
        var y = arguments[1]

        var sum = 0
        for (var arg of arguments)
            sum += arg

        return sum
    }

    console.log(add(2, 3, 4, 5))

}
console.log("---------------------------------------------------");
//전역 변수의 특징.
{
    //전역 공간에서는 변서 순언 (var를사용)해도 되고 안해도되고
    //둘은 같은것이다>? 아니다.
    //그럼 둘의 차이는?선언의의미에 차이가 있다. ㅡ>변수를 (미리) 준비시킨다.
    //전역 공간에서의 선언은 곧 window(전역객체) 객체의 속성이 된다.
    //그것이 선언이 아니고 값을 대입만 하는 경우도 마찬가지다.
    //요점은 선언을 하고 안하고의 차이를알아야한다.

    //window.alert("aa")
    // console.log(a)
    //a=2
    //var a;
    // for(var k in window)
    //     console.log(k)

}
//지역 변수의 특징.
// {
//      var f1 = function(){
//          // windown.a =1
//          a=1; 
//         var a 
//         a++ 

//         alert(a)
//         alert(window.a)
//      }
//      f1();
// }
//****************************************** */
// 함수 안에서 선언한 전역 변수 07.18화 수업시작.
// {

        function f1(){
            var a = 1
            console.log(a)

            function f2() {
                   a= 10//여기에 선언을 해주면 
                            // 지역변수가되어서 최종 a가 1 안해주며, 아우터를 쓰므로 a가 11으로 덮혀짐.
                    a++
                console.log(a)    
            }
            f2()

            console.log(a)

        }
        f1()
        // console.log("a" < "1")
        //소문자가 대문자보다 작고 숫자<소<대
// }
//클로져
{
    var fClosuer = null// 함수 내부가 아닌곳에선 선언하면 window객체로저장된다.
    function f1() {
        var a = 1//얘는 지역변수
        a++
        console.log("f1:" + a)

        function f2() {//f1함수의 내부에서 선언됐으므로 스코프는 함수f1와전역
            a++
            console.log("f2:" + a)
        }

        window.fClosuer = f2
    }

    f1()
    f1()
    f1()
    fClosuer()
    fClosuer()
}
console.log("-----------------------------------")
{
    var fClosuer = null
    var fClosuer2 = null

    function f1() {
        var a = 1//얘는 지역변수
        a++
        console.log("f1:" + a)

        function f2() {
            a++
            console.log("f2:" + a)
        }

        window.fClosuer = f2

        function f3() {
            a--
            console.log("f3:" + a)
        }
        window.fClosuer2 = f3
    }

    f1()
    f1()    
    f1()
    fClosuer()
    fClosuer2()
    fClosuer()
    fClosuer2()
}

{
    //1
    function closure() {
        var count = 0;


        return {
            getNum: function () {
                return count;
            },
            increaseNum: function () {
                count++;
            },
        };
    }



    var obj = closure();

    // 2
    console.log(obj.getNum());//0
    obj.increaseNum();//1
    obj.increaseNum();//2
    obj.increaseNum();//3
    console.log(obj.getNum());//3
    obj = null;


    // 3
    obj = closure();//0
    obj.increaseNum();//+1
    console.log(obj.getNum());//1


}