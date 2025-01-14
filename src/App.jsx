import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList";
import "./style/style.css"
import Header from "./components/Header";
import Section from "./components/Section";
import Container from "./components/Container";
import FoodDetail from "./components/FoodDetail";
import GridContainer from "./components/GridContainer";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  return (
    <div className="App">
      <Header />
      <Section>
        <Container>
          <Search foodData={foodData} setFoodData={setFoodData} />
          <GridContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
          <FoodDetail foodId={foodId} />
          </GridContainer>
        </Container>
      </Section>
    </div>
  )
}

export default App
