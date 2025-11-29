import { db } from "../_utils/firebase";
import { collection,
            getDocs,
            addDoc,
            query,
} from "firebase/firestore";

export const getItems = async(userId) => {
    try{
        const itemsColRef=collection(db,"users", userId, "items");
        //query the items sub collection for the user
        const itemsQuery = query(itemsColRef);
        const itemsSnapshot = await getDocs(itemsQuery);

        const items = itemsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return items;
    }
    catch (error){
        console.error("Error in getItems: ",error);
        //if error occurs a empty array is returned
        return [];
    }
};

export const addItem = async(userId, item) => {
    try{
        const itemsRef = collection(db,"users",userId,"items");

        //adding item into the items sub collection
        const docRef = await addDoc(itemsRef, item);

        return docRef.id;
    }
    catch (error){
        console.error("error in the addItem: ",error);
        return null;
    }
};