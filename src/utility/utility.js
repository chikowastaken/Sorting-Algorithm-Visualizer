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
    const range = to - from + 1;
    const uniqueSet = new Set();

    while (newArray.length < val) {
        const randomNum = Math.floor(Math.random() * range) + from;
        if (!uniqueSet.has(randomNum)) {
            newArray.push(randomNum)
            uniqueSet.add(randomNum)
        }
    }

    return newArray
}

// change elements background color
export function setArrayElementsToDefault(array) {
    for (let i = 0; i < array.length; i++) {
        const element = document.querySelectorAll(`.num-${array[i]}`)
        setElementsToDefault(element)
    }
    console.log('set')
}

export function setArrayElementsToFindished(array) {
    for (let i = 0; i < array.length; i++) {
        const element = document.querySelectorAll(`.num-${array[i]}`)
        setElementsToPurple(element)
    }
}


export function setElementsToGreen(elements) {
    if (elements.length === 1) {
        elements[0].style.backgroundColor = green
    } else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = green
        }
    }
}

export function setElementsToRed(elements) {
    if (elements.length === 1) {
        elements[0].style.backgroundColor = red
    } else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = red
        }
    }
}

export function setElementsToPurple(elements) {
    if (elements.length === 1) {
        elements[0].style.backgroundColor = purple
    } else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = purple
        }
    }
}

export function setElementsToYellow(elements) {
    if (elements.length === 1) {
        elements[0].style.backgroundColor = 'yellow'
    } else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = 'yellow'
        }
    }
}

export function setElementsToDefault(elements) {
    if (elements.length === 1) {
        elements[0].style.backgroundColor = ''
    } else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = ''
        }
    }
}

// checks if array is sorted 
export function isSorted(array, from = 0, to = array.length - 1) {
    for (let i = from + 1; i <= to; i++) {
        if (array[i] < array[i - 1]) {
            return false
        }
    }
    return true
}