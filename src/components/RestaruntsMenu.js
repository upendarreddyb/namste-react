
import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useresturentMenu from "../utils/useResturentMenu";
import RestaruntCategory from "./RestaruntCategory";
const RestaruntsMenu = () => {

    const { resId } = useParams();
    const restInfo = useresturentMenu(resId);
    const [showIndex, setShowIndex] = useState();

    if (restInfo === null) {
        return <Shimmer />;
    }

    const { name, costForTwoMessage, cuisines } = restInfo?.data?.cards[2]?.card?.card?.info;



    const categories = restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ); 

    console.log("categories", categories.length);

    return (
        <div className="text-center">
            <h1 className="font-bold text-xl p-6">{name}</h1>
            <p className="font-bold text-md">{cuisines.join(",")} {costForTwoMessage} </p>
          
            {
                categories?.map((category,index) => (
                    <RestaruntCategory setShowIndex={()=>setShowIndex(index)} showItems={index===showIndex ? true : false} key={category?.card?.card?.title} data={category?.card?.card} />
                ))
            }


        </div>
    )
}

export default RestaruntsMenu;