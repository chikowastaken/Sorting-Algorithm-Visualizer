import { delay } from '../utility'
import {
    setElementsToGreen,
    setElementsToRed,
    setElementsToPurple,
    setElementsToYellow,
    setElementsToDefault
} from '../utility'

export async function quickSortHelper(array, setArray, start, end, speed) {
    if (start >= end) {
        const pivotElem = document.querySelectorAll(`.num-${array[start]}`)
        setElementsToPurple(pivotElem)
        await delay(speed)

        // // Highlight the numbers that are sorted before the pivot in purple
        // for (let i = start - 1; i >= 0; i--) {
        //     const numElem = document.querySelectorAll(`.num-${array[i]}`);
        //     setElementsToPurple(numElem)
        //     await delay(speed)
        // }

        // Highlight the numbers from pivot to current iteration point in purple
        for (let i = start; i <= end; i++) {
            const numElem = document.querySelectorAll(`.num-${array[i]}`);
            setElementsToPurple(numElem);
            await delay(speed);
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
        if (array[right] < array[pivot] && array[left] > array[pivot]) {
            const firstElem = document.querySelectorAll(`.num-${array[left]}`)
            const secondElem = document.querySelectorAll(`.num-${array[right]}`)
            setElementsToGreen(firstElem)
            setElementsToGreen(secondElem)
            await delay(speed)

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
        const firstElem = document.querySelectorAll(`.num-${array[pivot]}`)
        const secondElem = document.querySelectorAll(`.num-${array[right]}`)
        setElementsToGreen(firstElem)
        setElementsToGreen(secondElem)
        await delay(speed)


        setElementsToRed(firstElem)
        setElementsToRed(secondElem)
        await delay(speed)

        let temp = array[right]
        array[right] = array[pivot]
        array[pivot] = temp
        setArray([...array])


        setElementsToGreen(firstElem)
        setElementsToGreen(secondElem)
        await delay(speed)

        setElementsToDefault(firstElem)
        setElementsToDefault(secondElem)
    }

    // pivotElem.style.backgroundColor = ''
    // setElementsToDefault(pivotElem)
    setElementsToPurple(pivotElem)

    quickSortHelper(array, setArray, start, right - 1, speed)
    quickSortHelper(array, setArray, right + 1, end, speed)
}