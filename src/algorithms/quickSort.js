



// var array = [2, 6, 5, 3, 4, 7, 0, 1]
export function swap(array, leftIndex, rightIndex) {
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}

export {red, green, purple} from '../utility'

export function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)] //middle element
    // pivot gavxado purple
    const pivotElem = document.getElementById(`${pivot}`)
    pivotElem.style.backgroundColor = purple

    var i = left // left pointer
    var j = right // right pointer
    while (i <= j) {
        while (array[i] < pivot) {
            i++
        }
        while (array[j] > pivot) {
            j--
        }
        if (i <= j) {
            swap(array, i, j) //sawpping two elements
            i++
            j--
        }
    }
    return i;
}

export function quickSort(array, left, right) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(array, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(array, index, right);
        }
    }
    return array;
}


// first call to quick sort
var sortedArray = quickSort(array, 0, array.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]