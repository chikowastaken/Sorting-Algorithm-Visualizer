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
import { mergeSort, merge, delay, checkIfBreak } from '../algorithms/mergeSort'
import { getBoxHeight, getBoxWidth, getFonSize, generateNewArray, updateArray } from '../utility'
import { bubbleSort } from '../algorithms/bubbleSort'


export default function Main() {
    const [sliderValue, setSliderValue] = useState(100); // Initial value of the slider
    const [tabIndex, setTabIndex] = useState(0)
    const [array, setArray] = useState([])
    const minArraySize = 4
    const maxArraySize = 170
    const numberFrom = 10
    const numberTo = 200
    const speed = 300 - Math.pow(array.length, 2) > 0 ?
        300 - Math.pow(array.length, 2) : 0

    const boxesGap = {
        gap: `${array.length < 5 ?
            '10px' : array.length < 8 ?
                '8px' : array.length < 11 ?
                    '6px' : array.length < 20 ?
                        '4px' : array.length < 50 ?
                            '3.5px' : array.length < 100 ?
                                '3px' : array.length < 130 ?
                                    '2.5px' : 2}`
    }

    const handleSliderChange = (value) => {
        setSliderValue(value)
    }

    const handleTabChange = (index) => {
        setTabIndex(index)
    }

    useEffect(() => {
        const arr = generateNewArray(sliderValue, numberFrom, numberTo)
        setArray(arr)
    }, [sliderValue])

    // btn clicked
    function handleSort() {
        // mergeSort
        // const indexArray = []
        // for (let i = 0; i < array.length; i++) {
        //     indexArray.push(i)
        // }
        // console.log(array)
        // mergeSort(indexArray, array, setArray, speed)
        // console.log(array)
        bubbleSort(array, setArray, speed)
    }

    function generateArray() {
        const arr = generateNewArray(sliderValue, numberFrom, numberTo)
        setArray(arr)
    }

    // array elements
    const arrayElements = array.map((num, index) => (
        <div
            className="box"
            key={index}
            style={{
                height: getBoxHeight(num),
                width: getBoxWidth(array),
                fontSize: getFonSize(array),
            }}
            id={`${num}`}
        >
            {sliderValue > 25 ? '' : num}
        </div>
    ))

    return (
        <div>
            <div className="header">
                <button className='generate-new-array-p'
                    onClick={generateArray}
                >Generate New Array</button>

                <div className='slider'>
                    <p>Change Array Size & Sorting Speed</p>
                    <Slider
                        aria-label='slider-ex-1'
                        defaultValue={sliderValue}
                        onChange={handleSliderChange}
                        w='100px'
                        min={minArraySize}
                        max={maxArraySize}
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

            <div className="center-x">
                <div className="array-flex-container" id="main" style={boxesGap}>
                    {arrayElements}
                </div>
            </div>
        </div>
    )
}

