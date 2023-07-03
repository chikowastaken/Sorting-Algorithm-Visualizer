var array = [2, 8, 5, 3, 9, 1]

function heapsort(array) {
    const n = array.length

    // Build a max heap
    buildMaxHeap(array)

    // Perform heap sort
    for (let i = n - 1; i > 0; i--) {
        swap(array, 0, i)
        heapify(array, i, 0)
    }

    return array;
}

function buildMaxHeap(array) {
    const n = array.length;
    for (let i = Math.floor(n / 2); i >= 0; i--) {
        heapify(array, n, i)
    }
    
}

function heapify(array, n, i) {
    let largest = i;
    const left = 2 * i + 1
    const right = 2 * i + 2

    if (left < n && array[left] > array[largest]) {
        largest = left
    }

    if (right < n && array[right] > array[largest]) {
        largest = right
    }

    if (largest !== i) {
        swap(array, i, largest)
        heapify(array, n, largest)
    }
}

function swap(array, i, j) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}
