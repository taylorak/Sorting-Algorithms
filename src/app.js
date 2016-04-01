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
    bubbleSortButton.className = 'button';
    bubbleSortButton.innerHTML = 'Bubble Sort';

    selectionSortButton = document.createElement('button');
    selectionSortButton.id = 'selectionSort';
    selectionSortButton.className = 'button';
    selectionSortButton.innerHTML = 'Selection Sort';

    insertionSortButton = document.createElement('button');
    insertionSortButton.id = 'insertionSort';
    insertionSortButton.className = 'button'
    insertionSortButton.innerHTML = 'Insertion Sort';

    quicksortButton = document.createElement('button');
    quicksortButton.id = 'quicksort';
    quicksortButton.className = 'button'
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
    visualizedArray = new sortingArray(length, canvas, 500);
    addEventListeners(length);
  }

  var sortingLoop = null;
  function addEventListeners(length) {

    reset.addEventListener('click', function() {
      visualizedArray.reset(length);
    })

    bubbleSortButton.addEventListener('click', function() {
      if(visualizedArray.actions.length === 0) {
        bubbleSort(visualizedArray);
      }
    })

    selectionSortButton.addEventListener('click', function() {
      if(visualizedArray.actions.length === 0) {
        selectionSort(visualizedArray);
      }
    })

    insertionSortButton.addEventListener('click', function() {
      if(visualizedArray.actions.length === 0) {
        insertionSort(visualizedArray);
      }
    })

    quicksortButton.addEventListener('click', function() {
      if(visualizedArray.actions.length === 0) {
        quicksort(visualizedArray, 0, visualizedArray.length() - 1);
      }
    })

  }

  init(20);


})();