// Part 5: landing page starts
"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";


export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();  

    return(
        <div className="text-white flex flex-col justify-self-center-safe">
            {user && (<p>Welcome! {user.displayName}, <img src={user.photoURL} alt={user.displayName}/> this is your link for <Link href="week-9/shopping-list" className="underline">Shopping List</Link></p>)}
            {!user && (<p className="mb-2">Please Sign in With GitHub to proceed</p>)}
            <p>
                {user ? (<button onClick={firebaseSignOut} className="border-2 border-white rounded bg-red-500 text-white p-2">Sign Out</button>):
                (<button onClick={gitHubSignIn} className="border-2 border-white rounded bg-blue-500 text-white p-2">Sign In</button>)}
           </p>
        </div>
    )
};

// Part 5: landing page ends