
import ItemList from "./ItemList";
import { useState } from "react"
const RestaruntCategory = ({ data, showItems,setShowIndex}) => {
    const handileClick = () => {
       // showItems==true ? setShowIndex(false) : setShowIndex(false)
        setShowIndex();
    }
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 m-auto">
            <div className="flex justify-between cursor-pointer" onClick={handileClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {
                showItems && <ItemList items={data.itemCards} />
            }

        </div>
    )
}

export default RestaruntCategory;