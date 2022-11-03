import React from "react"
import styled from "styled-components"
import data from "../../data.json"
import Chart from "./Chart"

const Card = () => {
  return (
    <Wrapper>
      <header>
        <h2>Spending - Last 7 Days</h2>
      </header>
      <Chart data={data} />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 2rem;
  background-color: hsl(var(--card-white));
  border-radius: 1rem;
`

export default Card
