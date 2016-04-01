function insertionSort(arr) {
  for(var i = 1; i < arr.length(); i++) {
    var index = i;
    while(index > 0 && arr.lessThan(index, index - 1)) {
      arr.swap(index, index - 1);
      //swap(arr, index, index - 1);
      index = index - 1;
    }
  }
}