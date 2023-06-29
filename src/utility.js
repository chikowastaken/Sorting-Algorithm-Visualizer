export const red = '#f95639d9'
export const green = '#58ee58'
export const purple = '#965ae1'

// box style functions
export function getBoxHeight(number) {
    const height = number * 3
    return `${height}px`
}

export function getBoxWidth(array) {
    const width = Math.floor(window.innerWidth / (array.length * 3))
    return `${width}px`
}

export function getFonSize(array) {
    const width = Math.floor(window.innerWidth / (array.length * 3))
    const fontSize = width > 70 ?
        '20px' : width > 60 ?
            '18px' : width > 50 ?
                '16px' : width > 40 ?
                    '14px' : width > 30 ?
                        '12px' : width > 20 ?
                            '10px' : 8
    return fontSize
}

// delay
export async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// generate new array on slider change
export function generateNewArray(val, from, to) {
    const newArray = []
    for (let i = 0; i < val; i++) {
        newArray.push(generateRandomNumber(from, to))
    }
    return newArray
}

function generateRandomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num
}


// change elements background color
export function defaultElementsBackgroundColor(array) {
    for (let i = 0; i < array.length; i++) {
        const element = document.getElementById(`${array[i]}`)
        element.style.backgroundColor = ''
    }
}

export function giveElementsFindishedBackgroundColor(array) {
    for (let i = 0; i < array.length; i++) {
        const element = document.getElementById(`${array[i]}`)
        element.style.backgroundColor = purple
    }
}

