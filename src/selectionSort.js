function selectionSort(arr) {
  for(var i = 0; i < arr.length(); i++) {
    var min = i;

    for(var j = i+1; j < arr.length(); j++) {
      if(arr.lessThan(j, min)) {
        min = j;
      }
    }

    if(min != i) {
      arr.swap(i, min)
    }

  }
}