import {
    setElementsToGreen,
    setElementsToRed,
    setElementsToDefault,
    setElementsToPurple,
    delay
} from "../utility"

var array = [2, 8, 5, 3, 9, 1]

export async function heapsort(array, setArray, speed) {
    console.log(array)
    console.log('came here')
    const n = array.length

    // Build a max heap
    await buildMaxHeap(array, setArray, speed)

    // Perform heap sort
    for (let i = n - 1; i > 0; i--) {
        await swap(array, setArray, 0, i, speed)
        const lastElement = document.querySelectorAll(`.num-${array[i]}`)
        setElementsToPurple(lastElement)
        await heapify(array, setArray, i, 0, speed)
    }

    const firstElement = document.querySelectorAll(`.num-${array[0]}`)
    setElementsToPurple(firstElement)
}

async function buildMaxHeap(array, setArray, speed) {
    const n = array.length;
    for (let i = Math.floor(n / 2); i >= 0; i--) {
        await heapify(array, setArray, n, i, speed)
    }
}

async function heapify(array, setArray, n, i, speed) {
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
        await swap(array, setArray, i, largest, speed)
        await heapify(array, setArray, n, largest, speed)
    }
}

async function swap(array, setArray, i, j, speed) {
    console.log('swap')
    const firstElement = document.querySelectorAll(`.num-${array[i]}`)
    const secondElement = document.querySelectorAll(`.num-${array[j]}`)

    setElementsToGreen(firstElement)
    setElementsToGreen(secondElement)
    await delay(speed)

    setElementsToRed(firstElement)
    setElementsToRed(secondElement)
    await delay(speed)

    
    console.log(`swapping ${i} to ${j}`)
    console.log('before: ' + array)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
    setArray([...array])
    console.log('after: ' + array)

    setElementsToGreen(firstElement)
    setElementsToGreen(secondElement)
    await delay(speed)

    setElementsToDefault(firstElement)
    setElementsToDefault(secondElement)
    await delay(speed)
}
