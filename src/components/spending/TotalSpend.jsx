import styled from "styled-components"

const TotalSpend = () => {
  return (
    <SpendWrapper>
      <div className="monthly-total">
        <h3>Total this month</h3>
        <span className="total">$478.33</span>
      </div>
      <div className="average-increase">
        <span className="percent">+2.4%</span>
        <span className="from-last-month">from last month</span>
      </div>
    </SpendWrapper>
  )
}

const SpendWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .monthly-total,
  .average-increase {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .monthly-total {
    h3 {
      font-size: 1.5rem;
      font-weight: 400;
      color: hsl(var(--medium-brown));
      line-height: 3.9rem;
    }

    span {
      font-size: 3rem;
      font-weight: 700;
    }
  }

  .average-increase {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    .percent {
      font-weight: 700;
      color: hsl(var(--dark-brown));
    }

    .from-last-month {
      color: hsl(var(--medium-brown));
    }
  }
`

export default TotalSpend
