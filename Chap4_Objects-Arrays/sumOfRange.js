function range(start, end, range) {
  array = [];
  if (start > end)
    for (i = start; i >= end; i += range) {
      console.log(i);
      array.push(i);
    }
  else
    for (i = start; i <= end; i += range) {
      array.push(i);
    }
  console.log(array);
  return array;
}

function sum(array) {
  var result = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
    console.log ( result );
    return result;
}

sum(range(1, 10, 2));  
sum(range(5, 2, -1));
