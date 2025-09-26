import ItemList from "./item-list";
export default function Page(){
    return(
        <main className="flex flex-col justify-self-center  text-black">
            <h1 className="text-5xl text-center m-3 p-2 rounded-lg bg-blue-200">Shopping List</h1>
            <ItemList/>
        </main>
    );
};