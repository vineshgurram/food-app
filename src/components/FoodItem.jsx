export default function FoodItem({ food, setFoodId }) {
    return (
        <div className="food-item-wrapper">
            <div className="food-item-inner-wrapper">
                <div className="food-img-box">
                    <img src={food.image} alt="" />
                </div>
                <div className="food-content-wrapper">
                    <div className="food-content-box">
                        <h4 className="heading">
                            {food.title}
                        </h4>
                    </div>
                    <div className="food-btn-box">
                        <button onClick={()=> setFoodId(food.id)}>View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}