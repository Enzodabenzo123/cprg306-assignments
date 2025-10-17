export default function Item({item}){
    let {name,quantity,category} = item;
    return(
        <ul className="m-3 p-1.5 text-2xl text-left bg-amber-100 rounded-lg">
            <li className="font-bold text-3xl">{name}</li>
            <li>Buy {quantity} in {category}</li>
            {/* <li>in {category}</li> */}
        </ul>
        
    );
};