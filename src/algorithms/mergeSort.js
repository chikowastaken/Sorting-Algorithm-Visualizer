import { delay } from "../utility";

export async function mergeSort(indexArray, array, setArray, speed) {
    if (indexArray.length <= 1) {
        return;
    }

    const middle = Math.floor(indexArray.length / 2);
    const leftIndexArray = indexArray.slice(0, middle);
    const rightIndexArray = indexArray.slice(middle);

    await mergeSort(leftIndexArray, array, setArray, speed);
    await mergeSort(rightIndexArray, array, setArray, speed);
    await merge(leftIndexArray, rightIndexArray, array, setArray, speed);
}

export async function merge(leftIndexArray, rightIndexArray, array, setArray, speed) {
    for (let i = 0; i < leftIndexArray.length; i++) {
        for (let j = 0; j < rightIndexArray.length; j++) {
            const leftIndex = leftIndexArray[i];
            const rightIndex = rightIndexArray[j];
            const firstElement = document.getElementById(`${array[leftIndex]}`);
            const secondElement = document.getElementById(`${array[rightIndex]}`);

            if (firstElement && secondElement) {
                firstElement.style.backgroundColor = 'rgb(44, 216, 44)';
                secondElement.style.backgroundColor = 'rgb(44, 216, 44)';
                await delay(speed);

                if (array[leftIndex] > array[rightIndex]) {
                    firstElement.style.backgroundColor = 'rgb(218, 58, 58)';
                    secondElement.style.backgroundColor = 'rgb(218, 58, 58)';
                    await delay(speed);

                    // swap
                    const temp = array[leftIndex];
                    array[leftIndex] = array[rightIndex];
                    array[rightIndex] = temp;
                    setArray([...array])

                    if (checkIfBreak(rightIndexArray, rightIndex, array)) {
                        j = rightIndexArray.length
                    }
                    await delay(speed);

                    firstElement.style.backgroundColor = 'rgb(44, 216, 44)';
                    secondElement.style.backgroundColor = 'rgb(44, 216, 44)';
                    await delay(speed);
                }

                secondElement.style.backgroundColor = '';
                firstElement.style.backgroundColor = '';
            }
        }
    }

    if (rightIndexArray.length > 1) {
        console.log('shemo')
        for (let i = 0; i < rightIndexArray.length; i++) {
            for (let j = i; j < rightIndexArray.length; j++) {
                const leftIndex = rightIndexArray[i];
                const rightIndex = rightIndexArray[j]
                const firstElement = document.getElementById(`${array[leftIndex]}`)
                const secondElement = document.getElementById(`${array[rightIndex]}`)
                if (firstElement && secondElement) {
                    firstElement.style.backgroundColor = 'rgb(44, 216, 44)';
                    secondElement.style.backgroundColor = 'rgb(44, 216, 44)';
                    await delay(speed)
                    if (array[leftIndex] > array[rightIndex]) {
                        firstElement.style.backgroundColor = 'rgb(218, 58, 58)';
                        secondElement.style.backgroundColor = 'rgb(218, 58, 58)';
                        await delay(speed)
                        // swap
                        const temp = array[leftIndex];
                        array[leftIndex] = array[rightIndex];
                        array[rightIndex] = temp;
                        setArray([...array])

                        await delay(speed);

                        firstElement.style.backgroundColor = 'rgb(44, 216, 44)';
                        secondElement.style.backgroundColor = 'rgb(44, 216, 44)';
                        await delay(speed)
                    }
                    firstElement.style.backgroundColor = '';
                    secondElement.style.backgroundColor = '';
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