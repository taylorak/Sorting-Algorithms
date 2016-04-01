function sortingArray(length, canvas, interval) {
  this.array = [];
  this.actions = [];
  this.domArray = [];
  this.lastModified = [];
  this.pivot = null;

  this.elementWidth = canvas.offsetWidth / 101;

  // draws array
  for(var i = 0; i < length; i ++) {
    var row = document.createElement('div');
    row.className = 'row';
    row.style.backgroundColor = '#9D538E';
    this.domArray[i] = row;
    canvas.appendChild(row);
  }

  this.reset(length);

  var that = this;
  this.sortingLoop = setInterval(function() {
    that.step();
  }, interval)
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
    },
    pivot: this.pivot
  });
}

sortingArray.prototype.lessThan = function(firstIndex, secondIndex) {
  this.actions.push({
    name : 'lessThan',
    element1: firstIndex,
    element2: secondIndex
  });

  return this.array[firstIndex] < this.array[secondIndex];
}

sortingArray.prototype.length = function() {
  return this.array.length;
}

sortingArray.prototype.reset = function(length) {
  for(var i = 0; i < length; i++) {
    var randomNum = Math.floor(Math.random() * 100) + 1;
    this.array[i] = randomNum;
    this.domArray[i].style.width = this.elementWidth * this.array[i] + 'px';
    this.domArray[i].style.backgroundColor = '#9D538E'
  }
  this.actions = [];
  this.pivot = null;
}

sortingArray.prototype.setPivot = function(index) {
  this.pivot = index;
  return this.pivot;
}


sortingArray.prototype.step = function() {

  if(this.lastModified) {
    this.lastModified.forEach(function(element) {
      element.style.backgroundColor = '#9D538E';
    })
  }

  if(this.actions.length === 0) {
    return;
  }

  var currentAction = this.actions.shift();

  switch(currentAction.name) {
    case 'swap':
      var index1 = currentAction.element1.index;
      var width1 = currentAction.element1.height;

      var index2 = currentAction.element2.index;
      var width2 = currentAction.element2.height;

      this.domArray[index1].style.width = this.elementWidth * width1 + 'px';
      this.domArray[index2].style.width = this.elementWidth * width2 + 'px';

      this.domArray[index1].style.background = '#692DAC';
      this.domArray[index2].style.background = '#692DAC';

      this.lastModified.push(this.domArray[index1]);
      this.lastModified.push(this.domArray[index2]);
      break;
    case 'lessThan':
      var index1 = currentAction.element1;
      var index2 = currentAction.element2;

      this.domArray[index1].style.background = '#34ACAF';
      this.domArray[index2].style.background = '#34ACAF';

      this.lastModified.push(this.domArray[index1]);
      this.lastModified.push(this.domArray[index2]);
      break;
    default:
      console.log('default');
  }
  return true;

}