function bubbleSort(arr) {
  var isSorted = false;
  var arrlength = arr.length() - 1;
  while(!isSorted) {
    isSorted = true;
    for(var i = 0; i < arrlength; i++) {
      if(arr.lessThan(i + 1, i)) {
        arr.swap(i + 1, i);
        isSorted = false;
      }
    }
    arrlength--;
  }
}