import { useEffect, useState } from "react"

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_API_KEY; // college id 

export default function Search({ foodData, setFoodData }) {
    const [query, setQuery] = useState("pizza");

    // Syntax for useEffect hooks
    // useEffect(() => {
    //     function hello(){
    //         console.log("hii");
    //     }
    //     hello();
    // }, [query])


    useEffect(() => {
        async function fetchFoodResult() {
            const fetchResult = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const fetchResultData = await fetchResult.json();
            // console.log(fetchResultData.results);
            setFoodData(fetchResultData.results);
        }
        fetchFoodResult();
    }, [query])
    return (
        <div className="search-box-wrapper">
            <div className="search-box">
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
        </div>
    )
}