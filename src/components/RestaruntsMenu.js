
import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useresturentMenu from "../utils/useResturentMenu";
const RestaruntsMenu = () => {

    const { resId } = useParams();
    const restInfo = useresturentMenu(resId);

    if (restInfo === null) {
        return <Shimmer />;
    }

    const { name, costForTwoMessage, cuisines } =
        restInfo?.data?.cards[2]?.card?.card?.info;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} {costForTwoMessage} </p>
            <h3>Menu</h3>
            <ul>
                {
                    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map((res) => (
                        <li key={res.card.info.id}>
                            {res.card.info.name} - Rs  {res.card.info.defaultPrice / 100 || res.card.info.price / 100}
                        </li>
                    )) 
                }

            </ul>
        </div>
    )
}

export default RestaruntsMenu;