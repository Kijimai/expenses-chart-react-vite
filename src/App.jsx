import ChartHeader from "./components/header/ChartHeader"
import Card from "./components/chart/Card"
import TotalSpend from "./components/spending/TotalSpend"
import styled from "styled-components"
import Attr from "./Attr"
import data from "./data.json"

function App() {
  return (
    <div className="App">
      <ExpensesChart>
        <ChartHeader balance={921.48} />
        <Card />
      </ExpensesChart>
      <Attr />
    </div>
  )
}

const ExpensesChart = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 0 auto;
  max-width: 54rem;

  @media only screen and (min-width: 768px) {
  }
`

export default App
