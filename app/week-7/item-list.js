"use client";
import Item from "./item";
import { useState} from "react";
// import itemList from "./items.json";


export default function ItemList({itemsData}){
    const [sortBy, setSortBy] = useState("name");
    
    let itemsCopy = [...itemsData];// creating a copy of the array for sorting
    if(sortBy === "name"){
            itemsCopy.sort((a,b) => a.name.localeCompare(b.name));
    }
    else if(sortBy === "category"){
            itemsCopy.sort((a,b) => a.category.localeCompare(b.category));
    }
    
    const handleSortChange = (state) => {
        setSortBy(state);
    };

    return(
        <section>
             <div className="m-2 justify-center">
            <button onClick={() => handleSortChange("name")} className={`cursor-pointer hover:bg-blue-300 p-1.5  border-white border-4 rounded w-45 text-black ${sortBy ==="name" ? 'bg-blue-600':'bg-yellow-100'}`}>Sort by Name</button>
            <button onClick={() => handleSortChange("category")} className={`cursor-pointer hover:bg-red-300 p-1.5 border-white border-4 rounded w-45 ml-1.5 text-black ${sortBy ==="category" ? 'bg-red-500':'bg-yellow-100'}`}>Sort by category</button>
            </div>
            <div>
                <ul>
                    {itemsCopy.map(item => (
                        <Item key={item.id} name={item.name} category={item.category} quantity={item.quantity}/>
                        
                    ))}
                </ul>
            </div>
        </section>
       
    );

};