import { useState } from "react"

export default function Array() {
    const [array, setArray] = useState([8, 2, 5, 3, 4, 7, 6, 1])

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
        <div className="center-x">
            <div className="array-flex-container" id="main">
                {arrayElements}
            </div>
        </div>
    )
}