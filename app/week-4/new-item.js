"use client";
import { useState } from "react";

export default function NewItem(){
    const [quantity, setQuantity] = useState(1);
    
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
    
    return(
        <div className="bg-white flex flex-row justify-self-center p-3 m-3 text-black text-5xl rounded-4xl">
            <p className=" w-20 m-5 p-3 border-2 border-black rounded-2xl content-center text-center" >{quantity}</p>
            <button onClick={increment} className={`rounded-2xl border-black border-2 p-5 m-5 ${quantity === 20 ? 'bg-gray-300 cursor-not-allowed':'bg-blue-500 hover:bg-blue-400'}`}>+</button>
            <button onClick={decrement} className={`rounded-2xl border-black border-2 px-6 m-5 ${quantity === 1 ? 'bg-gray-300 cursor-not-allowed':'bg-red-500 hover:bg-red-400'}`}>-</button>
        </div>
    );
};