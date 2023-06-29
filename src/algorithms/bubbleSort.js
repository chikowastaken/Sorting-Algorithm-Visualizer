import { delay, red, green } from "../utility"

export async function bubbleSort(array, setArray, speed) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            const firstElem = document.getElementById(`${array[j]}`)
            const secondElem = document.getElementById(`${array[j + 1]}`)
            // green
            firstElem.style.backgroundColor = green
            secondElem.style.backgroundColor = green
            await delay(speed)
            if (array[j] > array[j + 1]) {
                // red
                firstElem.style.backgroundColor = red
                secondElem.style.backgroundColor = red
                await delay(speed)
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                setArray([...array])
                // green
                firstElem.style.backgroundColor = green
                secondElem.style.backgroundColor = green
                await delay(speed)
            }
            firstElem.style.backgroundColor = ''
            secondElem.style.backgroundColor = ''
        }
    }
    
}