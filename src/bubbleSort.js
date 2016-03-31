function* bubbleSort(arr) {
  var isSorted = false;
  var arrlength = arr.length - 1;

  while(!isSorted) {
    var isSorted = true;
    for(var i = 0; i < arrlength; i++) {
      if(arr[i + 1] < arr[i]) {
        swap(arr, i, i + 1);
        var isSorted = false;
      }
      yield arr;
    }
    arrlength--;
  }
}

function swap(arr, firstIndex, secondIndex) {
  var tmp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tmp;
}

 // var random = [3, 2, 1];

 // var gen = bubbleSort(random);
 // console.log(gen.next().value);
 // console.log(gen.next().value);
 // console.log(gen.next().value);