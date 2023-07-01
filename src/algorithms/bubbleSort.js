import { delay } from "../utility"
import {
    setElementsToGreen,
    setElementsToRed,
    setElementsToDefault
} from "../utility"


export async function bubbleSort(array, setArray, speed) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            const firstElem = document.querySelectorAll(`.num-${array[j]}`)
            const secondElem = document.querySelectorAll(`.num-${array[j + 1]}`)
            // green
            setElementsToGreen(firstElem)
            setElementsToGreen(secondElem)
            await delay(speed)
            if (array[j] > array[j + 1]) {
                // red
                setElementsToRed(firstElem)
                setElementsToRed(secondElem)
                await delay(speed)
                
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                setArray([...array])
                // green
                setElementsToGreen(firstElem)
                setElementsToGreen(secondElem)
                await delay(speed)
            }
            setElementsToDefault(firstElem)
            setElementsToDefault(secondElem)
        }
    }
}