(function() {
  var container = document.querySelector('#bubbleSort');
  //console.log(container.offsetWidth);
  var arr = [];
  var largestNum = 0;
  var elementWidth;

  function createArray(length) {
    for(var i = 0; i < length; i++) {
      arr[i] = Math.floor(Math.random() * 100) + 1;
      if(arr[i] > largestNum) {
        largestNum = arr[i];
      }
    }
    elementWidth = container.offsetWidth / largestNum;
  }

  function drawArray() {
    for(var i = 0; i < arr.length; i++) {
      var row = document.createElement('div');
      row.className = 'row';
      for(var j = 0; j < arr[i])
    }
  }

  createArray(10);
  console.log(arr);
  console.log(largestNum);




})();