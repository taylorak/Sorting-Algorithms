function* bubbleSort2(arr) {
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


function bubbleSort(arr) {
  var isSorted = false;
  var arrlength = arr.length - 1;

  while(!isSorted) {
    isSorted = true;
    for(var i = 0; i < arrlength; i++) {
      if(arr[i + 1] < arr[i]) {
        swap(arr, i, i + 1);
        isSorted = false;
      }
    }
    arrlength--;
  }
}