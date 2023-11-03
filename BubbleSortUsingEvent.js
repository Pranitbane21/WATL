const EventEmitter = require('events');

class BubbleSortEventEmitter extends EventEmitter {}

function bubbleSort(arr, emitter) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        // Emit an event after a swap
        emitter.emit('swap', arr.slice(), j, j + 1);
      }
    }
  }

  // Emit a final event with the sorted array
  emitter.emit('sorted', arr.slice());

  return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
const emitter = new BubbleSortEventEmitter();

// Listen for events
emitter.on('swap', (arr, i, j) => {
  console.log(`Swapped ${arr[i]} and ${arr[j]}`);
});

emitter.on('sorted', (arr) => {
  console.log(`Sorted array: ${arr}`);
});

bubbleSort(arr, emitter);
