import { useState, useEffect } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Chart = ({ data }) => {
  const [activeBar, setActiveBar] = useState(null)
  const [currentHovered, setCurrentHovered] = useState(null)
  const [pos, setPos] = useState({ mouseX: null, mouseY: null })

  const getMouseCoords = (e) => {
    console.log(e.clientX, e.clientY)
    setPos({ mouseX: e.clientX, mouseY: e.clientY })
  }

  useEffect(() => {
    window.addEventListener("mousemove", getMouseCoords)
    return () => window.removeEventListener("mousemove", getMouseCoords)
  }, [pos])

  return (
    <>
      <ChartWrapper>
        {data.map((spending, idx) => {
          const userClicked = () => {
            setActiveBar(idx)
          }
{/* 
          const itemHovered = () => {
            setCurrentHovered(idx)
          }

          const hideHovered = () => {
            setCurrentHovered(null)
          } */}

          return (
            <div key={idx} className="single-data">
              <div
                className={`hover-data ${
                  currentHovered === idx || (activeBar === idx && "active")
                }`}
              >
                <span>${spending.amount}</span>
              </div>
              <button
                name={`${spending.day}-${idx}`}
                id={`${spending.day}-${idx}`}
                onClick={userClicked}
                className={`bar ${activeBar === idx && "clicked"}`}
                style={{ height: `calc(2px * ${spending.amount})` }}
              ></button>
              <label htmlFor={`${spending.day}-${idx}`}>{spending.day}</label>
            </div>
          )
        })}
      </ChartWrapper>
    </>
  )
}

const ChartWrapper = styled.figure`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1.2rem;
  margin-bottom: 2.4rem;
  width: 100%;

  .single-data {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 1.5rem;
    width: 100%;

    .hover-data {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      background-color: hsl(var(--dark-brown));
      border-radius: 0.5rem;
      margin-bottom: 0.6rem;
      padding: 0.8rem;
      pointer-events: none;
      &.active {
        opacity: 1;
      }

      span {
        font-size: 1.4rem;
        font-weight: 700;
        color: hsl(var(--white));
        line-height: 2rem;
      }
    }

    .bar {
      border: none;
      background-color: hsl(var(--soft-red));
      border-radius: 0.5rem;
      cursor: pointer;
      transition: 0.2s ease background-color;

      &:hover {
        background-color: hsl(var(--soft-red) / 0.8);
      }

      &.clicked {
        background-color: hsl(var(--cyan));

        &:hover {
          background-color: hsl(var(--cyan-hovered));
        }
      }
    }
  }
`

Chart.propTypes = {
  day: PropTypes.string,
  amount: PropTypes.number,
}

Chart.defaultProps = {
  day: "n/a",
  amount: 1,
}

export default Chart
