"use client";
import { useState } from "react";

export default function NewItem(){
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        let item = {name, quantity, category};
        console.log(item);
        alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    const increment = () => {
        if(quantity < 20){
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity -1);
        }
    };
    
    const handleNameChange =(e) => {
        let newName = e.target.value;
        setName(newName);
    }

    const handleCategoryChange = (e) => {
        let newCategory = e.target.value;
        setCategory(newCategory);
    }

    return(
        <section>
            <div className="flex flex-col justify-self-center items-center bg-gray-300 text-black p-5 m-5 rounded-2xl">
                <form onSubmit={handleSubmit} >
                    <label htmlFor="name"></label>
                    <input type="text" id="name" value={name} onChange={(event) => handleNameChange(event)} required placeholder="Enter Name" className="border-2 border-black mb-3 w-full "></input>
                    <div className="bg-white flex flex-row justify-self-center  text-black text-2xl rounded-2xl  h-auto w-auto">
                        <p className="m-2 p-2 border-1 border-black rounded-2xl content-center text-center" >{quantity}</p>
                        <button type="button" onClick={increment} className={`rounded-2xl border-black border-1 p-2 m-2 ${quantity === 20 ? 'bg-gray-300 cursor-not-allowed':'bg-blue-500 hover:bg-blue-400'}`}>+</button>
                        <button type="button" onClick={decrement} className={`rounded-2xl border-black border-1 p-2 m-2 ${quantity === 1 ? 'bg-gray-300 cursor-not-allowed':'bg-red-500 hover:bg-red-400'}`}>-</button>
                    </div>
                    <label htmlFor="category"></label>
                    <select id="category" value={category} onChange={(event) => handleCategoryChange(event)} className="border-2 border-black w-auto h-7">
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