import React from "react"
import styled from "styled-components"
import Logo from "../icons/Logo"
const ChartHeader = ({ balance }) => {
  return (
    <BalanceHeader>
      <div className="user-balance">
        <h2>My Balance</h2>
        <span>${balance || `0.00`}</span>
      </div>
      <Logo />
    </BalanceHeader>
  )
}

const BalanceHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(var(--soft-red));
  padding: 2rem;
  color: hsl(var(--white));
  border-radius: 1rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.4rem;
  }

  span {
    font-size: 2.4rem;
  }
`

export default ChartHeader
