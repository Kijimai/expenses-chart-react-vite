import Header from "./components/header/Header"
import Card from "./components/chart/Card"

function App() {
  return (
    <div className="App">
      <main>
        <Header balance={921.48} />
        <Card />
      </main>
    </div>
  )
}

export default App
