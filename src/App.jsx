import Header from "./components/header/Header"
import Card from "./components/chart/Card"
import TotalSpend from "./components/spending/TotalSpend"
import styled from "styled-components"
import data from "./data.json"

function App() {
  return (
    <div className="App">
      <ExpensesChart>
        <Header balance={921.48} />
        <Card />
      </ExpensesChart>
    </div>
  )
}

const ExpensesChart = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: 540px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
  }
`

export default App
