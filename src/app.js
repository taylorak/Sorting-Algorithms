(function() {
  var container = document.querySelector('#sortingAlgorithms');
  var arr = [];
  var largestNum = 0;
  var elementWidth;

  var bubbleSortButton = null;
  var reset = null;
  var canvas = null;

  var visualizedArray = null;

  function init(length) {
    // Creates Bubble Sort Button
    bubbleSortButton = document.createElement('button');
    bubbleSortButton.id = 'bubbleSort';
    bubbleSortButton.innerHTML = 'Bubble Sort';

    // Creates Reset Button
    reset = document.createElement('button');
    reset.id = 'reset';
    reset.innerHTML = 'Reset'

    // Creates Canvas
    canvas = document.createElement('div');
    canvas.id = 'canvas';

    container.appendChild(bubbleSortButton)
    container.appendChild(reset);
    container.appendChild(canvas);

    // Initializes Array and Event Listeners
    createArray(length);
    visualizedArray = new sortingArray(arr, canvas, elementWidth);
    addEventListeners(length);
    // drawArray();
  }

  function createArray(length) {
    for(var i = 0; i < length; i++) {
      arr[i] = Math.floor(Math.random() * 100) + 1;
      if(arr[i] > largestNum) {
        largestNum = arr[i];
      }
    }
    elementWidth = canvas.offsetWidth / 101;
  }

  // function drawArray() {
  //   canvas.innerHTML = '';
  //   for(var i = 0; i < arr.length; i++) {
  //     var row = document.createElement('div');
  //     row.className = 'row';
  //     row.style.width = elementWidth * arr[i] + 'px';
  //     row.style.backgroundColor = 'blue';
  //     canvas.appendChild(row);
  //   }
  // }

  var sortingLoop = null;
  function addEventListeners(length) {

    reset.addEventListener('click', function() {
      if(sortingLoop) {
        clearInterval(sortingLoop);
      }
      createArray(length);
      canvas.innerHTML = '';
      visualizedArray = new sortingArray(arr, canvas, elementWidth);
    })

    bubbleSortButton.addEventListener('click', function() {
      if(sortingLoop) {
        clearInterval(sortingLoop);
      }

      if(visualizedArray.actions.length === 0) {
        bubbleSort(visualizedArray);
      }

      var lastModified = null;
      sortingLoop = setInterval(function() {
        if(lastModified) {
          lastModified[0].style.backgroundColor = '#9D538E';
          lastModified[1].style.backgroundColor = '#9D538E';
        }
        lastModified = visualizedArray.step();
        if(lastModified === undefined) {
          clearInterval(sortingLoop);
        }
      }, 100)
    })
  }

  init(20);


})();