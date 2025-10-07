import Link from "next/link";
import NewItem from "./new-item";

export default function Page(){
    return(
        <main className="text-center">
            <h1> Creating new Items </h1>
            <NewItem/>
            <br></br>
            <Link className="bg-black border-white border-2 p-2 m-2 rounded-2xl" href="/">Return</Link>
        </main>
    );
};