export default function Item({id,name,quantity,category, onSelect}){
    // let {name,quantity,category} = item;
    return(
        <ul className="m-3 p-1.5 text-2xl text-left bg-amber-100 rounded-lg hover:bg-amber-300 cursor-pointer">
            <li className="font-bold text-3xl " onClick={() => onSelect(id)}>{name}
                <p className="font-normal">Buy {quantity} in {category}</p>
            </li>
           
        </ul>
        
    );
};