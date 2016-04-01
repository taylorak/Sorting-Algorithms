function sortingArray(array, canvas, elementWidth) {
  this.array = array;
  this.actions = [];
  this.domArray = [];

  this.elementWidth = elementWidth;

  // draws array
  for(var i = 0; i < this.array.length; i ++) {
    var row = document.createElement('div');
    row.className = 'row';
    row.style.width = elementWidth * arr[i] + 'px';
    row.style.backgroundColor = 'blue';
    this.domArray[i] = row;
    canvas.appendChild(row);
  }
}

sortingArray.prototype.swap = function(firstIndex, secondIndex) {
  var tmp = this.array[firstIndex];
  this.array[firstIndex] = this.array[secondIndex];
  this.array[secondIndex] = tmp;

  this.actions.push({
    name : 'swap',
    element1 : {
      index : firstIndex,
      height : this.array[firstIndex]
    },
    element2 : {
      index : secondIndex,
      height: this.array[secondIndex]
    }
  })

  //this.domArray[firstIndex].style.width = this.elementWidth * this.array[firstIndex] + 'px';
  //this.domArray[secondIndex].style.width = this.elementWidth * this.array[secondIndex] + 'px';
}

sortingArray.prototype.lessThan = function(firstIndex, secondIndex) {
  return this.array[firstIndex] < this.array[secondIndex];
}

sortingArray.prototype.greaterThan = function(firstIndex, secondIndex) {
  return this.array[secondIndex] < this.array[firstIndex];
}

sortingArray.prototype.length = function() {
  return this.array.length;
}

sortingArray.prototype.reset = function() {

}

sortingArray.prototype.step = function() {
  var currentAction = this.actions.shift();
  switch(currentAction.name) {
    case 'switch':
      var index1 = currentAction.element1.index;
      var width1 = currentAction.element1.height;

      var index2 = currentAction.element2.index;
      var width2 = currentAction.element2.height;

      this.domArray[index1].style.width = this.elementWidth * width1 + 'px';
      this.domArray[index2].style.width = this.elementWidth * width2 + 'px';
      break;
    default:
      console.log('default');
  }
}