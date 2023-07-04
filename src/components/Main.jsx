import { useEffect, useState } from 'react'
import {
    Button,
    Tabs,
    TabList,
    Tab,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark
} from '@chakra-ui/react'
import './Main.css'
import {
    getBoxHeight,
    getBoxWidth,
    getFonSize,
    generateNewArray,
    setArrayElementsToDefault,
    setArrayElementsToFindished,
} from '../utility'
// import { mergeSort } from '../algorithms/mergeSort'
import { bubbleSort } from '../algorithms/bubbleSort'
import { quickSort } from '../algorithms/quickSort'
import { heapsort } from '../algorithms/heapSort'
import { mergeSort } from '../algorithms/mergeSort'


export default function Main() {
    const [sliderValue, setSliderValue] = useState(100); // Initial value of the slider
    const [tabIndex, setTabIndex] = useState(0)
    const [array, setArray] = useState([])
    const [inProcess, setInProcess] = useState(false)
    const minArraySize = 4
    const maxArraySize = 160
    const numberFrom = 10
    const numberTo = 200
    const speed = 500 - Math.pow(array.length, 2) > 0 ?
        500 - Math.pow(array.length, 2) : 0




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
        console.log(sliderValue)
        setArray(arr)
        setArrayElementsToDefault(array)
    }, [sliderValue])

    // btn clicked
    function handleSort() {
        setArrayElementsToDefault(array)
        setInProcess(!inProcess)

        if (tabIndex === 0) {
            console.log('mergeSort')
            // mergeSort
            const indexArray = []
            for (let i = 0; i < array.length; i++) {
                indexArray.push(i)
            }

            mergeSort(array, setArray, 0, array.length - 1, speed).then(() => {
                setArrayElementsToFindished(array)
            })
        } else if (tabIndex === 1) {
            quickSort(array, setArray, 0, array.length - 1, 30)
        } else if (tabIndex === 2) {
            heapsort(array, setArray, speed)
        } else if (tabIndex === 3) {
            bubbleSort(array, setArray, speed).then(() => {
                setArrayElementsToFindished(array)
            })
        }
    }

    function generateArray() {
        console.log('new array')
        setArrayElementsToDefault(array)
        const arr = generateNewArray(sliderValue, numberFrom, numberTo)
        setArray(arr)
    }

    function step() {
        const num = Math.round(Math.random())
        const step = num === 0 ? 2 : 3
        return step
    }

    // array elements
    const arrayElements = array.map((num, index) => (
        <div
            className={`box num-${num}`}
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
                <button
                    className={`generate-new-array-p ${inProcess ? 'disabled' : ''}`}
                    onClick={generateArray}
                >Generate New Array</button>

                <div className='slider'>
                    <p
                        className={`${inProcess ? 'disabled' : ''}`}
                    >Change Array Size & Sorting Speed</p>
                    <Slider
                        aria-label='slider-ex-1'
                        defaultValue={sliderValue}
                        onChange={handleSliderChange}
                        w='100px'
                        min={minArraySize}
                        max={maxArraySize}
                        step={step()}
                        className={`${inProcess ? 'disabled' : ''}`}
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
                            <Tab className={`${inProcess ? 'disabled' : ''}`}>Merge Sort</Tab>
                            <Tab className={`${inProcess ? 'disabled' : ''}`}>Quick Sort</Tab>
                            <Tab className={`${inProcess ? 'disabled' : ''}`}>Heap Sort</Tab>
                            <Tab className={`${inProcess ? 'disabled' : ''}`}>Bubble Sort</Tab>
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

