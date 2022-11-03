import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Chart = ({ data }) => {
  return (
    <ChartWrapper>
      {data.map((spending, idx) => {
        return (
          <>
            <div
              className="bar"
              style={{ height: `calc(2px * ${spending.amount})` }}
            >
              {spending.amount}
            </div>
            <span>{spending.day}</span>
          </>
        )
      })}
    </ChartWrapper>
  )
}

const ChartWrapper = styled.figure`
  display: flex;
  .bar {
    background-color: hsl(var(--soft-red));
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
