"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
// import itemsData  from "./items.json";
import { getItems, addItem} from "../_services/shopping-list-services";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page(){
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(null);
    const { user} = useUserAuth();

    // loading from db
    const loadItems = async() => {
        if(!user) return;
        const itemsFromDb = await getItems(user.uid);
        setItems(itemsFromDb);
    };

    //useEffect for loadItems when user status is changed
    useEffect(() =>{
        loadItems();
    },[user]);

    // from previous code week 9, removes parts from fetch data 
    const handleItemSelected = (item) => {
        let itemName = item.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        let trimmedName = itemName.split(" " && ",")[0]; // trims outs extra spaces and commas 
        setSelectedItemName(trimmedName);
        
    }
    
    //altered week-9 code for week-10
    // const handleAddItem = (item) => {
    //     //handles adding a new item to the items state
    //     setItems([...items, item]);
    //     console.log(item);
    // };

     const handleAddItem = async (item) => {
        const newItemId = await addItem(user.uid, item);

        const newItemWithId = {
            id: newItemId,
            ...item
        };

        setItems([...items, newItemWithId]);
    };
    if (!user) {
        return (
            <div className="m-4 text-center">
                <h1 className="m-4">
                    You must sign in to access this page
                </h1>
                <Link href="./" className="border-2 border-white rounded bg-blue-500 text-white p-2 ">return to log in</Link>
            </div>
            
        )
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