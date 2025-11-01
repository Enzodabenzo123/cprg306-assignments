"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData  from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleItemSelected = (item) => {
        let itemName = item.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        let trimmedName = itemName.split(" " && ",")[0]; // trims outs extra spaces and commas 
        setSelectedItemName(trimmedName);
        
    }
    const handleAddItem = (item) => {
        //handles adding a new item to the items state
        setItems([...items, item]);
        console.log(item);
    }
    return(
        //layout with two columns
        <main className="flex flex-row bg-black min-h-screen">
            <div className="w-1/2 text-black">
                <h1 className="text-5xl text-center m-3 p-2 rounded-lg bg-blue-200">Shopping List + Meal Ideas</h1>
                <div className="flex flex-col justify-self-left  text-black">
                    
                    <NewItem onAddItem={handleAddItem}/>
                    <ItemList itemsData={items} onItemSelect={handleItemSelected}/> 
                </div>
            </div>
            <div className=" w-1/2 text-black">
                <MealIdeas ingredient={selectedItemName}/>
            </div>
            
        </main>
    );
};