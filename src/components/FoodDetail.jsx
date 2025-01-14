import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
    const [food, setFood] = useState({});
    const [loading, setLoading] = useState(false);

    const URL = `https://api.spoonacular.com/recipes/${foodId}/information/`;
    // const API_KEY = "1738c4e9307041049d39d6377c1b487d";
    const API_KEY = "f48e32ec6f144367bc901bd4283373c5"; // college id 

    useEffect(() => {
        async function fetchFoodDetail() {
            const response = await fetch(`${URL}?apiKey=${API_KEY}`);
            const result = await response.json();
            console.log(result);
            setFood(result)
        }
        fetchFoodDetail();
    }, [foodId]);
    return (
        <div className="food-detail-wrapper">
            {/* food id {foodId} */}
            <div className="food-inner-detail-wrapper">
                <h2 className="main-heading">
                    {food.title}
                </h2>
                <div className="food-img-box">
                    <img src={food.image} alt="" />
                </div>

                <div className="food-info-box">
                    <div className="card-info-box">
                        <p className="text">{food.vegetarian ? "Vegetarian Dish" : "Non-Vegetarian Dish"}</p>
                        <p className="text">{food.pricePerServing} Rupees</p>
                        <p className="text">{food.readyInMinutes} Minutes</p>
                    </div>
                </div>
                <div className="food-info-box">
                    <h2 className="heading">
                        Instructions
                    </h2>
                    <div className="text"
                        dangerouslySetInnerHTML={{
                            __html: food.instructions || "<p>No instructions available</p>",
                        }}
                    />
                </div>
            </div>
        </div >
    )
}