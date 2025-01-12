import FoodItem from "./FoodItem";

export default function FoodList({ foodData }) {
    return (
<div className="food-list-box-wrapper">
                {
                    foodData.map((food) => (
                        <FoodItem key={food.id} food={food} />
                    ))
                }
            </div>
    )
}