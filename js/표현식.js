var list = ['item1', 'item2', 'item3']
var i
var doSomethingHandler = function (itemIndex) {
        return function doSomething(evt) {
            // 클로저가 생성되어, itemIndex를 인자로 참조 할 수 있게 된다.
            console.log(list[itemIndex]);
        };
    };

for (i = 0; i < list.length; i += 1) {
    list[i].onclick = doSomethingHandler(i);
}