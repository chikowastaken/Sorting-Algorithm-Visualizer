import { delay, red, green } from "../utility"
import {
    setElementsToGreen,
    setElementsToRed,
    setElementsToDefault
} from "../utility"

export async function mergeSort(indexArray, array, setArray, speed) {
    if (indexArray.length <= 1) {
        return;
    }

    const middle = Math.floor(indexArray.length / 2)
    const leftIndexArray = indexArray.slice(0, middle)
    const rightIndexArray = indexArray.slice(middle)

    await mergeSort(leftIndexArray, array, setArray, speed)
    await mergeSort(rightIndexArray, array, setArray, speed)
    await merge(leftIndexArray, rightIndexArray, array, setArray, speed)
}

export async function merge(leftIndexArray, rightIndexArray, array, setArray, speed) {

    // [0, 1, 2] [3, 4, 5]
    // [2, 4, 6] [1, 3, 5]
    // [2, 4, 6, 1, 3, 5]

    for (let i = 0; i < leftIndexArray.length; i++) {
        for (let j = 0; j < rightIndexArray.length; j++) {
            const leftIndex = leftIndexArray[i]
            const rightIndex = rightIndexArray[j]
            const firstElement = document.querySelectorAll(`.num-${array[leftIndex]}`)
            const secondElement = document.querySelectorAll(`.num-${array[rightIndex]}`)

            if (firstElement && secondElement) {
                setElementsToGreen(firstElement)
                setElementsToGreen(secondElement)
                await delay(speed)

                if (array[leftIndex] > array[rightIndex]) {
                    setElementsToRed(firstElement)
                    setElementsToRed(secondElement)
                    await delay(speed)

                    // swap
                    const temp = array[leftIndex]
                    array[leftIndex] = array[rightIndex]
                    array[rightIndex] = temp
                    setArray([...array])

                    // const newArray = [
                    //     ...array.slice(0, leftIndex),
                    //     array[rightIndex],
                    //     array[leftIndex],
                    //     ...array.slice(leftIndex + 1, rightIndex),
                    //     ...array.slice(rightIndex + 1)
                    // ]
                    // setArray([...newArray])

                    if (checkIfBreak(rightIndexArray, rightIndex, array)) {
                        j = rightIndexArray.length
                    }
                    await delay(speed)

                    setElementsToGreen(firstElement)
                    setElementsToGreen(secondElement)
                    await delay(speed)
                }

                setElementsToDefault(firstElement)
                setElementsToDefault(secondElement)
            }
        }
    }

    if (rightIndexArray.length > 1) {
        for (let i = 0; i < rightIndexArray.length; i++) {
            for (let j = i; j < rightIndexArray.length; j++) {
                const leftIndex = rightIndexArray[i];
                const rightIndex = rightIndexArray[j]
                const firstElement = document.querySelectorAll(`.num-${array[leftIndex]}`)
                const secondElement = document.querySelectorAll(`.num-${array[rightIndex]}`)
                if (firstElement && secondElement) {
                    setElementsToGreen(firstElement)
                    setElementsToGreen(secondElement)
                    await delay(speed)

                    if (array[leftIndex] > array[rightIndex]) {
                        setElementsToRed(firstElement)
                        setElementsToRed(secondElement)
                        await delay(speed)
                        // swap
                        // [0, 1, 2] [3, 4, 5]
                        // [2, 4, 6] [1, 3, 5]
                        const temp = array[leftIndex]
                        array[leftIndex] = array[rightIndex]
                        array[rightIndex] = temp
                        setArray([...array])

                        // const newArray = [
                        //     ...array.slice(0, leftIndex),
                        //     array[rightIndex],
                        //     array[leftIndex],
                        //     ...array.slice(leftIndex + 1, rightIndex),
                        //     ...array.slice(rightIndex + 1)
                        // ]
                        // setArray([...newArray])

                        await delay(speed)

                        setElementsToGreen(firstElement)
                        setElementsToGreen(secondElement)
                        await delay(speed)
                    }
                    setElementsToDefault(firstElement)
                    setElementsToDefault(secondElement)
                }
            }
        }
    }
}

export function checkIfBreak(indexArray, index, array) {
    const num = array[index]
    for (let i = 0; i < indexArray.length; i++) {
        const j = indexArray[i]
        const temp = array[j]
        if (num > temp) {
            return false
        }
    }
    return true
}

