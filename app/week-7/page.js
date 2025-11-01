"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData  from "./items.json";
import { useState } from "react";

export default function Page(){
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        //handles adding a new item to the items state
        setItems([...items, item]);
        console.log(item);
    }
    return(
        <main className="flex flex-col justify-self-center  text-black">
            <h1 className="text-5xl text-center m-3 p-2 rounded-lg bg-blue-200">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList itemsData={items}/>
            
        </main>
    );
};