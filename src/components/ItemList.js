import { IMG_URL } from "../utils/constants";
const ItemList = ({ items }) => {
    console.log("ietems", items)

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id}
                    className="p-2 m-2 text-xs text-left border-gray-200 border-b-2 flex justify-between">

                    <div className="9/12">
                        <div className="py-2">
                            <sapn>
                                {item.card.info.name} -
                            </sapn>
                            <sapn >
                                ₹  {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                            </sapn>
                        </div>
                        <p>{item.card.info.description}</p>
                    </div>
                    <div className="w-40 p-4 3/12">
                        <div className="absolute">
                            <button className="p-2 mx-16 bg-black text-white shadow-lg">Add +</button>
                        </div>
                        <img src={IMG_URL + item.card.info.imageId} />
                    </div>
                </div>

            ))}
        </div>
    )
}

export default ItemList; 