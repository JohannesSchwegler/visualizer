import React, { useState, useEffect, useRef, DOMElement } from "react"
import { array } from "prop-types"


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Search() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const list = useRef<HTMLHeadingElement>(null);
  const [array, setArray] = useState<number[]>([])

  useEffect(() => {
    setArray(generateRandomNumberArray(0, 300));

  }, [])
  return (
    <>
      <h1>Search</h1>

      <LinearSearch array={array} target={2} />
      <button
        onClick={() => SearchElement(array, 2)}>Start</button>
    </>
  )
}

function LinearSearch({ array, target }) {
  return (
    <>
      <div className="list">
        {array.map(item => {
          return <h1>{item}</h1>
        })}
      </div>


    </>
  )
}
function SearchElement(array: number[], target: number): void {
  const list = document.querySelector(".list").children;


  array.forEach((item, i) => {

    setTimeout(() => {
      if (item === target) {
        return;
      } else {

        console.log(list[i]);
        list[i].className = "visited"
      }
    }, 750 * (i + 1))




  })


  return
}

function generateRandomNumberArray(min, max): number[] {

  const result: number[] = []
  for (let i = 0; i < 15; i++) {
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    result.push(randomNum)
  }

  return result;
}
