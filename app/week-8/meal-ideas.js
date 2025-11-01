"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        // try and catch to prevent crashing the site if error occurs
        try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || []; // return empty array if no meals found so meal.lenght still works 
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
            return []; // return empty array on error so when no meals found
        }
    }
    // function to load meal ideas based on the ingredient
    const loadMealIdeas = async () => {
        const newMealIdeas = await fetchMealIdeas(ingredient);
        setMeals(newMealIdeas);
    };
    // useEffect to load meal ideas when ingredient changes checking if ingredient is not null
    useEffect(() => {
        if(!ingredient) return;
        loadMealIdeas();
    }, [ingredient]); // dependency array includes ingredient to refetch when it changes

    return(
        
        <div className="p-4 bg-gray-200 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-2">
                List of meals for "{ingredient || '—'}"
            </h2>

            {!ingredient && <p>Select an ingredient to see meal ideas.</p>}

            {ingredient && meals.length === 0 && (
            <p>No meals found for "{ingredient}".</p>
            )}
            
            <ul className="grid grid-cols-2 gap-1">
                {meals.map((meal) => (
                <li className="m-2 border-2 p-2"key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
};