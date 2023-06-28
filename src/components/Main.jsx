import { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import { Tabs, TabList, Tab } from '@chakra-ui/react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react'
import './Main.css'
import Array from './Array'
import { useContext } from 'react';
import { MyContext } from '../App';
import { mergeSort, merge, delay, checkIfBreak } from '../algorithms/mergeSort'

export default function Main() {
    const [sliderValue, setSliderValue] = useState(50); // Initial value of the slider
    const [tabIndex, setTabIndex] = useState(0)
    const [array, setArray] = useState([8, 2, 5, 3, 4, 7, 6, 1])
    // const { array, setArray } = useContext(MyContext);
    const speed = 150

    const handleSliderChange = (value) => {
        setSliderValue(value)
    }

    const handleTabChange = (index) => {
        setTabIndex(index)
    }

    useEffect(() => {
        generateNewArray(sliderValue)
    }, [sliderValue])

    function generateNewArray(val) {

    }

    function generateRandomNumber() {
        
    }

    // btn clicked
    function handleSort() {
        const indexArray = [0, 1, 2, 3, 4, 5, 6, 7]
        mergeSort(indexArray, array, setArray, speed)
    }

    // // merge sort
    // async function mergeSort(indexArray) {
    //     if (indexArray.length <= 1) {
    //         setSorting(false);
    //         return;
    //     }

    //     const middle = Math.floor(indexArray.length / 2);
    //     const leftIndexArray = indexArray.slice(0, middle);
    //     const rightIndexArray = indexArray.slice(middle);

    //     await mergeSort(leftIndexArray);
    //     await mergeSort(rightIndexArray);
    //     await merge(leftIndexArray, rightIndexArray);
    // }


    // async function delay(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }

    // async function merge(leftIndexArray, rightIndexArray) {
    //     for (let i = 0; i < leftIndexArray.length; i++) {
    //         for (let j = 0; j < rightIndexArray.length; j++) {
    //             const leftIndex = leftIndexArray[i];
    //             const rightIndex = rightIndexArray[j];
    //             const firstElement = document.getElementById(`${array[leftIndex]}`);
    //             const secondElement = document.getElementById(`${array[rightIndex]}`);
    //             firstElement.style.backgroundColor = 'rgb(44, 216, 44)';
    //             secondElement.style.backgroundColor = 'rgb(44, 216, 44)';
    //             await delay(speed);

    //             if (array[leftIndex] > array[rightIndex]) {
    //                 firstElement.style.backgroundColor = 'rgb(218, 58, 58)';
    //                 secondElement.style.backgroundColor = 'rgb(218, 58, 58)';
    //                 await delay(speed);

    //                 const temp = array[leftIndex];
    //                 array[leftIndex] = array[rightIndex];
    //                 array[rightIndex] = temp;
    //                 setArray([...array]);
    //                 if (checkIfBreak(rightIndexArray, rightIndex)) {
    //                     j = rightIndexArray.length
    //                 }
    //                 await delay(speed);

    //                 firstElement.style.backgroundColor = 'rgb(44, 216, 44)';
    //                 secondElement.style.backgroundColor = 'rgb(44, 216, 44)';
    //                 await delay(speed);
    //             }

    //             secondElement.style.backgroundColor = '';
    //             firstElement.style.backgroundColor = '';
    //         }
    //     }

    //     if (rightIndexArray.length > 1) {
    //         for (let i = 0; i < rightIndexArray.length; i++) {
    //             for (let j = i; j < rightIndexArray.length; j++) {
    //                 const leftIndex = rightIndexArray[i];
    //                 const rightIndex = rightIndexArray[j]
    //                 const firstElement = document.getElementById(`${array[leftIndex]}`)
    //                 const secondElement = document.getElementById(`${array[rightIndex]}`)
    //                 firstElement.style.backgroundColor = 'rgb(44, 216, 44)';
    //                 secondElement.style.backgroundColor = 'rgb(44, 216, 44)';
    //                 await delay(speed)
    //                 if (array[leftIndex] > array[rightIndex]) {
    //                     firstElement.style.backgroundColor = 'rgb(218, 58, 58)';
    //                     secondElement.style.backgroundColor = 'rgb(218, 58, 58)';
    //                     await delay(speed)

    //                     const temp = array[leftIndex];
    //                     array[leftIndex] = array[rightIndex];
    //                     array[rightIndex] = temp;
    //                     setArray([...array]);
    //                     await delay(speed);

    //                     firstElement.style.backgroundColor = 'rgb(44, 216, 44)';
    //                     secondElement.style.backgroundColor = 'rgb(44, 216, 44)';
    //                     await delay(speed)
    //                 }
    //                 firstElement.style.backgroundColor = '';
    //                 secondElement.style.backgroundColor = '';
    //             }
    //         }
    //     }
    // }

    // function checkIfBreak(indexArray, index) {
    //     const num = array[index]
    //     for (let i = 0; i < indexArray.length; i++) {
    //         const j = indexArray[i]
    //         const temp = array[j]
    //         if (num > temp) {
    //             return false
    //         }
    //     }
    //     return true
    // }

    // array elements
    const arrayElements = array.map((num, index) => (
        <div
            className="box"
            key={index}
            style={{
                height: `${num * 40}px`,
            }}
            id={`${num}`}
        >
            {num}
        </div>
    ))


    return (
        <div>
            <div className="header">
                <p className='new-array'>Generate New Array</p>

                <div className='slider'>
                    <p>Change Array Size & Sorting Speed</p>
                    <Slider
                        aria-label='slider-ex-1'
                        defaultValue={sliderValue}
                        onChange={handleSliderChange}
                        w='100px'
                        min={4}
                        max={100}
                    >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </div>

                <div className="tabs">
                    <Tabs onChange={handleTabChange}>
                        <TabList>
                            <Tab>Merge Sort</Tab>
                            <Tab>Quick Sort</Tab>
                            <Tab>Heap Sort</Tab>
                            <Tab>Bubble Sort</Tab>
                        </TabList>
                    </Tabs>
                </div>

                <Button colorScheme='blue'
                    onClick={handleSort}
                >Sort</Button>
            </div>

            {/* {!sorting && <Array />} */}
            <div className="center-x">
                <div className="array-flex-container" id="main">
                    {arrayElements}
                </div>
            </div>
        </div>

    )
}

