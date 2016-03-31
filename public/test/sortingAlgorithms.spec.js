describe('Sorting Algorithm Tests', function () {
  var unsortedArray = null;
  var sortedArray = [1, 2, 3, 4, 5];

  beforeEach(function() {
    unsortedArray = [5, 4, 3, 2, 1];
  })

  describe('Bubble Sort', function() {
    it('should be a function', function() {
      expect(bubbleSort).to.be.a('function');
    });

    it('should take an input array and apply bubbleSort', function() {
      bubbleSort(unsortedArray);
      expect(unsortedArray).to.deep.equal(sortedArray);
    });
  });

  describe('Insertion Sort', function() {
    it('should be a function', function() {
      expect(insertionSort).to.be.a('function');
    });

    it('should take an input array and apply insertionSort', function() {
      insertionSort(unsortedArray);
      expect(unsortedArray).to.deep.equal(sortedArray);
    });
  });

  describe('Selection Sort', function() {
    it('should be a function', function() {
      expect(selectionSort).to.be.a('function');
    });

    it('should take an input array and apply selectionSort', function() {
      selectionSort(unsortedArray);
      expect(unsortedArray).to.deep.equal(sortedArray);
    });
  });

  describe('Merge Sort', function() {
    it('should be a function', function() {
      expect(mergeSort).to.be.a('function');
    });

    it('should take an input array and apply mergeSort', function() {
      mergeSort(unsortedArray);
      expect(unsortedArray).to.deep.equal(sortedArray);
    });
  });

  describe('Quicksort', function() {
    it('should be a function', function() {
      expect(quicksort).to.be.a('function');
    });

    it('should take an input array and apply quicksort', function() {
      quicksort(unsortedArray, 0, unsortedArray.length - 1);
      expect(unsortedArray).to.deep.equal(sortedArray);
    });
  });

});