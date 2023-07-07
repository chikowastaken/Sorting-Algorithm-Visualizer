import { delay } from '../utility/utility'
import {
    setElementsToGreen,
    setElementsToRed,
    setElementsToPurple,
    setElementsToYellow,
    setElementsToDefault
} from '../utility/utility'

function isSortedUntilIndex(array, index) {
    for (let i = 1; i <= index; i++) {
        if (array[i] < array[i - 1]) {
            return false
        }
    }
    return true
}

function isSortedAfterIndex(array, index) {
    for (let i = index + 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            return false
        }
    }
    return true
}

function isSortedFromTo(array, from, to) {
    for (let i = from + 1; i <= to; i++) {
        if (array[i] < array[i - 1]) {
            return false
        }
    }
    return true
}


export async function quickSort(array, setArray, start, end, speed) {
    if (start >= end) {
        const pivotElem = document.querySelectorAll(`.num-${array[start]}`)
        setElementsToPurple(pivotElem)
        await delay(speed)

        // Highlight the numbers that are sorted before the pivot in purple
        if (isSortedUntilIndex(array, start)) {
            for (let i = start - 1; i >= 0; i--) {
                const numElem = document.querySelectorAll(`.num-${array[i]}`);
                setElementsToPurple(numElem)
                await delay(speed)
            }
        }

        if (isSortedAfterIndex(array, start)) {
            for (let i = start; i < array.length; i++) {
                const numElem = document.querySelectorAll(`.num-${array[i]}`);
                setElementsToPurple(numElem)
                await delay(speed)
            }
        }

        if (isSortedFromTo(array, start, end)) {
            for (let i = start; i <= end; i++) {
                const numElem = document.querySelectorAll(`.num-${array[i]}`);
                setElementsToPurple(numElem)
                await delay(speed)
            }
        }

        return
    }
    let pivot = start
    let left = start + 1
    let right = end;

    const pivotElem = document.querySelectorAll(`.num-${array[pivot]}`)
    setElementsToYellow(pivotElem)
    await delay(speed)


    while (right >= left) {
        const firstElem = document.querySelectorAll(`.num-${array[left]}`);
        const secondElem = document.querySelectorAll(`.num-${array[right]}`);

        setElementsToGreen(firstElem);
        setElementsToGreen(secondElem);
        await delay(speed);

        if (array[left] < array[pivot]) {
            setElementsToDefault(firstElem);
        }
        if (array[right] > array[pivot]) {
            setElementsToDefault(secondElem);
        }


        if (array[right] < array[pivot] && array[left] > array[pivot]) {
            setElementsToRed(firstElem)
            setElementsToRed(secondElem)
            await delay(speed)

            let temp = array[right]
            array[right] = array[left]
            array[left] = temp
            setArray([...array])

            setElementsToGreen(firstElem)
            setElementsToGreen(secondElem)
            await delay(speed)

            setElementsToDefault(firstElem)
            setElementsToDefault(secondElem)
        }
        if (array[right] >= array[pivot]) {
            right--
        }
        if (array[left] <= array[pivot]) {
            left++
        }
    }

    if (pivot !== right) {
        const pivotElem = document.querySelectorAll(`.num-${array[pivot]}`)
        const secondElem = document.querySelectorAll(`.num-${array[right]}`)
        setElementsToGreen(pivotElem)
        setElementsToGreen(secondElem)
        await delay(speed)

        setElementsToRed(pivotElem)
        setElementsToRed(secondElem)
        await delay(speed)

        let temp = array[right]
        array[right] = array[pivot]
        array[pivot] = temp
        setArray([...array])


        setElementsToGreen(pivotElem)
        setElementsToGreen(secondElem)
        await delay(speed)

        setElementsToPurple(pivotElem)
        setElementsToDefault(secondElem)
    }

    setElementsToPurple(pivotElem)
    await delay(speed)

    quickSort(array, setArray, start, right - 1, speed)
    quickSort(array, setArray, right + 1, end, speed)
}