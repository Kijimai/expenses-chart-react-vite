import React from "react"
import styled from "styled-components"
import Logo from "../icons/Logo"
const ChartHeader = ({ balance }) => {
  return (
    <BalanceHeader>
      <div className="user-balance">
        <h1>My balance</h1>
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
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  span {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.1rem;
  }

  svg {
    height: 4rem;
    width: 6rem;
  }

  @media only screen and (min-width: 600px) {
    padding: 2.6rem 3.2rem;
    padding-right: 3.9rem;

    h2 {
      line-height: 2.3rem;
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }

    span {
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 4.2rem;
    }

    svg {
      height: auto;
      width: auto;
    }
  }
`

export default ChartHeader
