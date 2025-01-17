import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
    const [food, setFood] = useState({});
    const [loading, setLoading] = useState(false);

    const URL = `https://api.spoonacular.com/recipes/${foodId}/information/`;
    const API_KEY = import.meta.env.VITE_API_KEY; // college id 

    useEffect(() => {
        async function fetchFoodDetail() {
            const response = await fetch(`${URL}?apiKey=${API_KEY}`);
            const result = await response.json();
            console.log(result);
            setFood(result);
            setLoading(true);
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
                <div className="food-info-box">
                <h2 className="heading">
                Ingredients
                    </h2>
                    <ol className="text">
                     {
                        loading ? food.extendedIngredients.map(item => <li key={item.id}><img src={`https://api.spoonacular.com/recipes/${item.id}/${item.image}`} alt="" /> {item.aisle}</li>): "not loading"
                     }
                    </ol>
                </div>
            </div>
        </div >
    )
}