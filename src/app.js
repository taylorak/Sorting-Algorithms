(function() {
  var container = document.querySelector('#sortingAlgorithms');
  var arr = [];
  var largestNum = 0;
  var elementWidth;

  var bubbleSortButton = null;
  var selectionSortButton = null;
  var insertionSortButton = null;
  var quicksortButton = null;

  var reset = null;
  var canvas = null;

  var visualizedArray = null;

  function init(length) {
    // Creates Bubble Sort Button
    bubbleSortButton = document.createElement('button');
    bubbleSortButton.id = 'bubbleSort';
    bubbleSortButton.innerHTML = 'Bubble Sort';

    selectionSortButton = document.createElement('button');
    selectionSortButton.id = 'selectionSort';
    selectionSortButton.innerHTML = 'Selection Sort';

    insertionSortButton = document.createElement('button');
    insertionSortButton.id = 'insertionSort';
    insertionSortButton.innerHTML = 'Insertion Sort';

    quicksortButton = document.createElement('button');
    quicksortButton.id = 'quicksort';
    quicksortButton.innerHTML = 'Quicksort';

    // Creates Reset Button
    reset = document.createElement('button');
    reset.id = 'reset';
    reset.innerHTML = 'Reset'

    // Creates Canvas
    canvas = document.createElement('div');
    canvas.id = 'canvas';

    container.appendChild(bubbleSortButton)
    container.appendChild(selectionSortButton)
    container.appendChild(insertionSortButton)
    container.appendChild(quicksortButton)
    container.appendChild(reset);
    container.appendChild(canvas);

    // Initializes Array and Event Listeners
    //createArray(length);
    visualizedArray = new sortingArray(length, canvas, elementWidth);
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

  var sortingLoop = null;
  function addEventListeners(length) {

    reset.addEventListener('click', function() {
      if(sortingLoop) {
        clearInterval(sortingLoop);
      }
      visualizedArray.reset(length);
    })

    bubbleSortButton.addEventListener('click', function() {
      if(sortingLoop) {
        clearInterval(sortingLoop);
        visualizedArray.reset(length);
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

    selectionSortButton.addEventListener('click', function() {
      if(sortingLoop) {
        clearInterval(sortingLoop);
        visualizedArray.reset(length);
      }

      if(visualizedArray.actions.length === 0) {
        selectionSort(visualizedArray);
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

    insertionSortButton.addEventListener('click', function() {
      if(sortingLoop) {
        clearInterval(sortingLoop);
        visualizedArray.reset(length);
      }

      if(visualizedArray.actions.length === 0) {
        insertionSort(visualizedArray);
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

    quicksortButton.addEventListener('click', function() {
      if(sortingLoop) {
        clearInterval(sortingLoop);
        visualizedArray.reset(length);
      }

      if(visualizedArray.actions.length === 0) {
        quicksort(visualizedArray, 0, visualizedArray.length() - 1);
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