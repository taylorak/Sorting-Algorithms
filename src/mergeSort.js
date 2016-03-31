function mergeSort(arr) {
  splitMerge(arr, 0, arr.length, []);
}

function splitMerge(arr, startIndex, endIndex, workArr) {
  if(endIndex - startIndex < 2) {
    return;
  }

  var middleIndex = Math.floor((startIndex + endIndex) / 2);
  splitMerge(arr, startIndex, middleIndex, workArr);
  splitMerge(arr, middleIndex, endIndex, workArr);
  merge(arr, startIndex, middleIndex, endIndex, workArr);
  copyArray(workArr, startIndex, endIndex, arr);

}

function merge(arr, startIndex, middleIndex, endIndex, workArr) {
  var leftIndex = startIndex;
  var rightIndex = middleIndex;
  for(var i = startIndex; i < endIndex; i++) {
    if(leftIndex < middleIndex && (rightIndex >= endIndex || arr[leftIndex] <= arr[rightIndex])) {
      workArr[i] = arr[leftIndex];
      leftIndex += 1;
    } else {
      workArr[i] = arr[rightIndex];
      rightIndex += 1;
    }
  }
}

function copyArray(workArr, startIndex, endIndex, arr) {
  for(var i = startIndex; i < endIndex; i++) {
    arr[i] = workArr[i];
  }
}