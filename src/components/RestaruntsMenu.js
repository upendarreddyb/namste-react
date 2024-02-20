
import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import {useParams} from 'react-router-dom';
const RestaruntsMenu = () => {
    const [restInfo, setfetchsMenu] = useState(null);
    const [mcards, setcards] = useState([]);
    const {resId } = useParams();
    console.log("resId",resId)
    useEffect(() => {
        getresMenu();
    }, [])
    const getresMenu = async () => {
        const resdata = await axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        setfetchsMenu(resdata);
        setcards(resdata?.data?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2]?.card?.card?.itemCards)
    }

    if (restInfo === null) {
        return <Shimmer />;
    }
    const { name, costForTwoMessage, cuisines } = restInfo?.data?.data?.cards[2]?.card?.card?.info;
    console.log("restMenu", mcards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} {costForTwoMessage} </p>
            <h3>Menu</h3>
            <ul>
                {
                    mcards.map((res) => (
                        <li key={res.card.info.id}>
                            {res.card.info.name} - Rs  {res.card.info.defaultPrice/100 || res.card.info.price/100}
                        </li>
                    ))
                }
               
            </ul>
        </div>
    )
}

export default RestaruntsMenu;