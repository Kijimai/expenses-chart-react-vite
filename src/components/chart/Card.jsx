import React from "react"
import styled from "styled-components"
import data from "../../data.json"
import ChartHeader from "../header/ChartHeader"
import Chart from "./Chart"
import TotalSpend from "../spending/TotalSpend"
const Card = () => {
  return (
    <Wrapper>
      <h2>Spending - Last 7 Days</h2>
      <Chart data={data} />
      <Divider />
      <TotalSpend />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 2rem;
  border-radius: 1rem;
  background-color: hsl(var(--card-white));

  h2 {
    font-size: 2.4rem;
    margin-bottom: 6.6rem;
  }
`

const Divider = styled.div`
  height: 0.2rem;
  background-color: hsl(var(--divider));
  width: 100%;
  margin-bottom: 2.4rem;
`

export default Card
