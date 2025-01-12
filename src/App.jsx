import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList";
import "./style/style.css"
import Header from "./components/Header";
import Section from "./components/Section";
import Container from "./components/Container";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Header />
      <Section>
        <Container>
        <Search foodData={foodData} setFoodData={setFoodData} />
        <FoodList foodData={foodData} />
        </Container>
      </Section>
    </div>
  )
}

export default App
