import React from "react"
import styled from "styled-components"
import data from "../../data.json"
import Chart from "./Chart"
import TotalSpend from "../spending/TotalSpend"
const Card = () => {
  return (
    <Wrapper>
      <header>
        <h2>Spending - Last 7 Days</h2>
      </header>
      <Chart data={data} />
      <Divider />
      <TotalSpend data={data} />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 2rem;
  background-color: hsl(var(--card-white));
  border-radius: 1rem;

  header {
    margin-bottom: 6.6rem;

    h2 {
      font-size: 2.4rem;
    }
  }
`

const Divider = styled.div`
  height: 0.2rem;
  background-color: hsl(var(--divider));
  width: 100%;
`

export default Card
