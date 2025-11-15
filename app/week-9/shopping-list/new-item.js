"use client";
import { useState } from "react";

export default function NewItem({onAddItem}){
    
    const [item, setItem] = useState({id: "", name: "", quantity: 1, category: "Produce"});
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let genId = '';
        for(let i = 0; i < 19; i++){
            genId += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        onAddItem({...item, id: genId});
        setItem({id: "", name: "", quantity: 1, category: "Produce"});
        
    }

  const increment = () => {
        if(item.quantity < 20){
            
            setItem((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
        }
    };

    const decrement = () => {
        if(item.quantity > 1){
           
            setItem((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
        }
    };
    
    const handleNameChange =(e) => {
        
        setItem({...item,name:e.target.value});
    }

    const handleCategoryChange = (e) => {
        
        setItem({...item,category:e.target.value});
        
    }

    return(
        <section>
            <div className="flex flex-col  items-center bg-gray-300 text-black p-5 m-5 rounded-2xl w-auto">
                <form onSubmit={handleSubmit} >
                    <label htmlFor="name"></label>
                    <input type="text" id="name" value={item.name} onChange={handleNameChange} required placeholder="Enter Name" className="border-2 border-black mb-3 w-full " autoComplete="on"></input>
                    <div className="bg-white flex flex-row justify-self-center  text-black text-2xl rounded-2xl  h-auto w-auto">
                        <p className="m-2 p-2 border-1 border-black rounded-2xl content-center text-center" >{item.quantity}</p>
                        <button type="button" onClick={increment} className={`rounded-2xl border-black border-1 p-2 m-2 ${item.quantity === 20 ? 'bg-gray-300 cursor-not-allowed':'bg-blue-500 hover:bg-blue-400'}`}>+</button>
                        <button type="button" onClick={decrement} className={`rounded-2xl border-black border-1 p-2 m-2 ${item.quantity === 1 ? 'bg-gray-300 cursor-not-allowed':'bg-red-500 hover:bg-red-400'}`}>-</button>
                    </div>
                    <label htmlFor="category"></label>
                    <select id="category" value={item.category} onChange={handleCategoryChange} className="border-2 border-black w-auto h-7">
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>

                    <button type="submit" className="m-2 p-1.5 bg-blue-500 hover:bg-blue-400 rounded-2xl">Add Item</button>
                </form>
            </div>
        </section>
        
    );
};