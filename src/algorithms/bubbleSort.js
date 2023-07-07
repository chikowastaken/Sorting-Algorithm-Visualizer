import { delay, setElementsToPurple } from "../utility/utility"
import {
    setElementsToGreen,
    setElementsToRed,
    setElementsToDefault
} from "../utility/utility"

export async function bubbleSort(array, setArray, speed) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            const firstElem = document.querySelectorAll(`.num-${array[j]}`)
            const secondElem = document.querySelectorAll(`.num-${array[j + 1]}`)

            setElementsToGreen(firstElem)
            setElementsToGreen(secondElem)
            await delay(speed)
            if (array[j] > array[j + 1]) {

                setElementsToRed(firstElem)
                setElementsToRed(secondElem)
                await delay(speed)
                
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                setArray([...array])

                setElementsToGreen(firstElem)
                setElementsToGreen(secondElem)
                await delay(speed)
            }
            setElementsToDefault(firstElem)
            setElementsToPurple(secondElem)
        }
    }
}