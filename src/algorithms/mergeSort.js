import {
    delay,
    setElementsToDefault,
    setElementsToGreen,
    setElementsToRed
} from "../utility";

function slideDown(array, setArray, l, r, speed) {
    let temp = array[r]
    for (let i = r - 1; i >= l; i--) {
        array[i + 1] = array[i]
    }
    array[l] = temp
    setArray([...array])
}

export async function mergeSort(array, setArray, l, r, speed) {
    if (l < r) {
        let m = parseInt(l + (r - l) / 2)
        await mergeSort(array, setArray, l, m, speed)
        await mergeSort(array, setArray, m + 1, r, speed)
        await merge(array, setArray, l, m, r, speed)
    }
}


async function merge(array, setArray, l, m, r, speed) {
    let y = l
    let i = l
    let j = m + 1

    while (i < j && j <= r) {
        const firstElement = document.querySelectorAll(`.num-${array[j]}`)
        const secondElement = document.querySelectorAll(`.num-${array[i]}`)
        setElementsToGreen(firstElement)
        setElementsToRed(secondElement)
        
        await delay(speed)

        if (array[j] > array[i]) i++
        else {
            slideDown(array, setArray, i, j, speed)
            i++
            j++
        }

        await delay(speed)
        setElementsToGreen(firstElement)
        setElementsToRed(secondElement)
        await delay(speed)
        setElementsToDefault(firstElement)
        setElementsToDefault(secondElement)
    }
}
