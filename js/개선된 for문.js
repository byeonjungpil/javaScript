var items = ['item1', 'item2', 'item3'];

items.forEach(function(item) {
    console.log(item);
});
// 출력 결과: item, item2, item3
 
var obj = {
    a: 1, 
    b: 2, 
    c: 3
};

for (var prop in obj) {
    console.log(prop, obj[prop]); // a 1, b 2, c 3
}

var iterable = [10, 20, 30];

for (var value of iterable) {
  console.log(value); // 10, 20, 30
}