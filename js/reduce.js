const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
	

//누산기        = accumulator
//현재 값       = currentValue
//현재 인덱스  = currentIndex
//원본 배열     = array 