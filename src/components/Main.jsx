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
    TabIndicator
} from '@chakra-ui/react'
import './Main.css'
import {
    getBoxHeight,
    getBoxWidth,
    getFonSize,
    generateNewArray,
    setArrayElementsToDefault,
    setArrayElementsToFindished,
    purple,
    isSorted
} from '../utility/utility'
import { bubbleSort } from '../algorithms/bubbleSort'
import { quickSort } from '../algorithms/quickSort'
import { heapsort } from '../algorithms/heapSort'
import { mergeSort } from '../algorithms/mergeSort'


export default function Main() {
    const [sliderValue, setSliderValue] = useState(29); // Initial value of the slider
    const [tabIndex, setTabIndex] = useState(0)
    const [array, setArray] = useState([])
    const [inProcess, setInProcess] = useState(false)
    const minArraySize = 4
    const maxArraySize = 160
    const numberFrom = 10
    const numberTo = 200
    var speed = 0

    useEffect(() => {
        const arr = generateNewArray(sliderValue, numberFrom, numberTo)
        setArray(arr)
        setArrayElementsToDefault(array)
    }, [sliderValue])

    useEffect(() => {
        if (isSorted(array)) {
            setArrayElementsToDefault(array)
            generateArray()
        }
    }, [tabIndex])


    function calculateSpeed() {
        if (array.length >= 4 && array.length <= 20) {
            speed = 500 - (array.length - 4) * 25 > 300 ? 500 - (array.length - 4) * 25 > 300 : 300
        } else if (array.length < 40) {
            speed = 25
        } else if (array.length < 80) {
            speed = 15
        } else if (array.length < 120) {
            speed = 10
        } else if (array.length <= 160) {
            speed = tabIndex < 2 ? 5 : 0
        }
    }

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

    // btn clicked
    function handleSort() {
        setArrayElementsToDefault(array)
        setInProcess(true)
        calculateSpeed()

        if (tabIndex === 0) {
            const indexArray = []
            for (let i = 0; i < array.length; i++) {
                indexArray.push(i)
            }

            mergeSort(array, setArray, 0, array.length - 1, speed).then(() => {
                console.log('merge - ' + speed)
                setArrayElementsToFindished(array)
                setInProcess(false)
            })
        } else if (tabIndex === 1) {
            console.log('quick - ' + speed)
            quickSort(array, setArray, 0, array.length - 1, speed, setInProcess)
        } else if (tabIndex === 2) {
            heapsort(array, setArray, speed).then(() => {
                console.log('heap - ' + speed)
                setInProcess(false)
            })
        } else if (tabIndex === 3) {
            bubbleSort(array, setArray, speed).then(() => {
                console.log('bubble - ' + speed)
                setArrayElementsToFindished(array)
                setInProcess(false)
            })
        }
    }

    function generateArray() {
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
                        colorScheme={inProcess ? 'purple' : 'blue'}
                    >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </div>

                <div className="tabs">
                    <Tabs onChange={handleTabChange} >
                        <TabList>
                            <Tab
                                _selected={{ color: purple }}
                                className={`${inProcess ? 'disabled' : ''}`}>Merge Sort</Tab>
                            <Tab
                                _selected={{ color: purple }}
                                className={`${inProcess ? 'disabled' : ''}`}>Quick Sort</Tab>
                            <Tab
                                _selected={{ color: purple }}
                                className={`${inProcess ? 'disabled' : ''}`}>Heap Sort</Tab>
                            <Tab
                                _selected={{ color: purple }}
                                className={`${inProcess ? 'disabled' : ''}`}>Bubble Sort</Tab>
                        </TabList>
                        <TabIndicator
                            mt="-2px"
                            ml='-0.28px'
                            height="2px"
                            bg="#965ae1"
                        />
                    </Tabs>
                </div>

                <Button
                    className={`${inProcess ? 'disabled' : ''}`}
                    colorScheme={inProcess ? 'purple' : 'blue'}
                    onClick={handleSort}
                >Sort</Button>
            </div>

            <div className="center-x">
                <div className="array-flex-container" id="main" style={boxesGap}>
                    {arrayElements}
                </div>
            </div>
        </div >
    )
}

