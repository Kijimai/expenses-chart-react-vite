import { useState, useEffect } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Chart = ({ data }) => {
  const [activeBar, setActiveBar] = useState(null)
  const [currentHovered, setCurrentHovered] = useState(null)

  return (
    <>
      <ChartWrapper>
        {data.map((spending, idx) => {
          const userClicked = () => {
            setActiveBar(idx)
          }

          const hoveredBar = (curr) => {}

          return (
            <div key={idx} className="single-data">
              <button
                name={`${spending.day}-${idx}`}
                id={`${spending.day}-${idx}`}
                onMouseOver={() => hoveredBar(this)}
                onClick={userClicked}
                className={`bar ${activeBar === idx && "clicked"}`}
                style={{ height: `calc(3px * ${spending.amount})` }}
              ></button>
              <div
                className={`hover-data ${
                  currentHovered === idx || (activeBar === idx && "active")
                }`}
              >
                <span>${spending.amount}</span>
              </div>
              <label className="day-label" htmlFor={`${spending.day}-${idx}`}>
                {spending.day}
              </label>
            </div>
          )
        })}
      </ChartWrapper>
    </>
  )
}

const ChartWrapper = styled.figure`
  display: flex;
  align-items: flex-end;
  margin-bottom: 2.4rem;
  width: 100%;
  gap: 1.2rem;

  .single-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;

    .hover-data {
      display: none;
    }

    .bar {
      border: none;
      background-color: hsl(var(--soft-red));
      border-radius: 0.5rem;
      cursor: pointer;
      transition: 0.2s ease background-color;
      width: 100%;

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

    label {
      font-size: 1.2rem;
      color: hsl(var(--medium-brown));
    }

    @media only screen and (min-width: 600px) {
      .hover-data {
        order: -1;
        display: block;
        visibility: hidden;
        opacity: 0;
        background-color: hsl(var(--dark-brown));
        border-radius: 0.5rem;
        margin-bottom: 0.6rem;
        padding: 0.8rem;
        pointer-events: none;
        font-size: 1.8rem;

        span {
          font-size: 1.4rem;
          font-weight: 700;
          color: hsl(var(--white));
          line-height: 2rem;
        }

        &.active {
          opacity: 1;
          visibility: visible;
        }
      }

      .bar {
        max-width: 5rem;
      }

      .bar:hover + .hover-data {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    gap: 0;
    .single-data {
      label {
        font-size: 1.5rem;
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
