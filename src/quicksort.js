function quicksort(arr, firstIndex, secondIndex) {
  if(firstIndex < secondIndex) {
    var partitionIndex = partition(arr, firstIndex, secondIndex);
    quicksort(arr, firstIndex, partitionIndex);
    quicksort(arr, partitionIndex + 1, secondIndex);
  }
}

function partition(arr, firstIndex, secondIndex) {
  console.log(firstIndex);
  var pivotIndex = arr.setPivot(firstIndex);
  var biggerIndex = firstIndex - 1;
  var smallerIndex = secondIndex + 1;

  while(true) {
    do {
      biggerIndex++;
    } while(arr.lessThan(biggerIndex, pivotIndex));

    do{
      smallerIndex--;
    } while(arr.lessThan(pivotIndex, smallerIndex));

    if(biggerIndex >= smallerIndex) {
      return smallerIndex;
    }
    arr.swap(biggerIndex, smallerIndex);
  }
}