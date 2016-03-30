function* bubbleSort() {
  var isSorted = false;
  var arrlength = this.length - 1;

  while(!isSorted) {
    var isSorted = true;
    for(var i = 0; i < arrlength; i++) {
      if(this[i + 1] < this[i]) {
        swap(this, i, i + 1);
        var isSorted = false;
      }
      yield this;
    }
    arrlength--;
  }
}

function swap(arr, firstIndex, secondIndex) {
  var tmp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tmp;
}

var arr = [3, 2, 1];
Array.prototype.bubbleSort = bubbleSort;

gen = arr.bubbleSort();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);