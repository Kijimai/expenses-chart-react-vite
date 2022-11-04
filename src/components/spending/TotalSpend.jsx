import styled from "styled-components"

const TotalSpend = () => {
  return (
    <SpendWrapper>
      <h3>Total this month</h3>
      <div className="monthly-total">
        <span className="total">$478.33</span>
        <div className="average-increase">
          <span className="percent">+2.4%</span>
          <span className="from-last-month">from last month</span>
        </div>
      </div>
    </SpendWrapper>
  )
}

const SpendWrapper = styled.section`
  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
    color: hsl(var(--medium-brown));
  }

  .monthly-total {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .total {
      font-size: 3rem;
      font-weight: 700;
      line-height: 3.9rem;
      color: hsl(var(--dark-brown));
    }

    .average-increase {
      display: flex;
      flex-direction: column;

      .percent,
      .from-last-month {
        line-height: 2rem;
        font-size: 1.5rem;
      }

      .percent {
        font-weight: 700;
        text-align: right;
      }

      .from-last-month {
        color: hsl(var(--medium-brown));
      }
    }
  }

  @media only screen and (min-width: 600px) {
    h3 {
      font-size: 1.8rem;
      line-height: 2.4rem;
    }

    .monthly-total {
      .total {
        font-size: 4.8rem;
        line-height: 6.25rem;
      }

      .average-increase {
        .percent, .from-last-month {
          font-size: 1.8rem;
          line-height: 2.4rem;
        }
      }
    }
  }
`

export default TotalSpend
