import { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Chart = ({ data }) => {
  const [activeBar, setActiveBar] = useState(null)

  return (
    <ChartWrapper>
      {data.map((spending, idx) => {
        const userClicked = () => {
          setActiveBar(idx)
        }

        return (
          <div key={idx} className="single-data">
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
  )
}

const ChartWrapper = styled.figure`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.2rem;
  margin-bottom: 2.4rem;
  
  .single-data {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;

    .bar {
      display: block;
      border: none;
      background-color: hsl(var(--soft-red));
      transform-origin: bottom;
      width: 100%;
      border-radius: 0.5rem;
      cursor: pointer;
      accent-color: hsl(var(--cyan));
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
